import { _decorator, CCInteger, Component, Node, input, Input, EventKeyboard, KeyCode, director, pipeline, Contact2DType, Collider2D, IPhysics2DContact } from 'cc';
import { Ground } from './Ground';
import { Results } from './Results';
import { Bird } from './Bird';
import { BirdAudio } from './BirdAudio';
import { StopResume } from './StopResume';

import { PipePool } from './PipePool';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {
    @property({
        type: Ground,
        tooltip : 'this is ground'
    })
    public ground : Ground;

    @property({
        type: Results,
        tooltip: 'results go here'
    })
    public result : Results

    @property({
        type:StopResume,
        tooltip:'stop resume'
    })
    public stopResume : StopResume;

    @property({
        type:Bird
    })
    public bird : Bird;

    @property({
        type:PipePool
    })
    public pipeQueue: PipePool;

    @property({
        type:BirdAudio
    })
    public clip : BirdAudio;

    @property({
        type: CCInteger
    })
    public speed : number = 200;

    @property({
        type:CCInteger
    })
    public pipeSpeed : number = 200;
    private iniSpeed : number;
    private iniPipeSpeed : number;

    public isOver : boolean;

    protected onLoad(): void {
        this.initListener();
        this.result.resetScore();
        this.isOver = true;
        director.pause();
        this.iniSpeed = this.speed;
        this.iniPipeSpeed = this.pipeSpeed;
    }

    enableTouch() {
        if (this.isOver == true) {
            this.resetGame();
            this.bird.resetBird();
            this.startGame();
        }
        if (this.isOver == false) {
            this.bird.fly();
            this.clip.onAudioQueue(0);
        }
    }

    initListener() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        this.node.on(Node.EventType.TOUCH_START, this.enableTouch, this);
    }

    onKeyDown(event : EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_P:
                this.stopResume.pauseGame();
                break;
            case KeyCode.KEY_R:
                this.stopResume.resumeGame();
                break;
        }
    }

    startGame() {
        this.result.hideResults();
        director.resume();
    }

    gameOver() {
        this.result.showResults();
        this.isOver = true;
        this.clip.onAudioQueue(3);
        director.pause();
    }

    resetGame() {
        this.result.resetScore();
        this.pipeQueue.reset();
        this.isOver = false;
        this.startGame();
    }

    passPipe() {
        this.result.addScore();
        this.clip.onAudioQueue(1);
    }

    createPipe() {
        this.pipeQueue.addPool();
    }

    contactGroundPipe() {
        let collider = this.bird.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(selfcollider: Collider2D, otherCollider : Collider2D, contact : IPhysics2DContact | null) {
        this.bird.hitSomething = true;
        this.clip.onAudioQueue(2);
    }

    birdStruck() {
        this.contactGroundPipe();
        if (this.bird.hitSomething == true) {
            this.gameOver();
        }
    }

    update() {
        if (this.isOver == false) {
            this.birdStruck();
        }
    }
    
    changeSpeed(num : number) {
        if (num == -1) {
            this.speed = 0;
            this.pipeSpeed = 0;
        } else if (num == -2) {
            this.speed = this.iniSpeed;
            this.pipeSpeed = this.iniPipeSpeed;
        } else {
            this.speed = this.iniSpeed + num * 20;
            this.pipeSpeed = this.iniPipeSpeed + num * 20;
        }
    }
}
