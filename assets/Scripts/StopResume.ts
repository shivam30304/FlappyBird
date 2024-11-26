import { _decorator, Component, ERigidBody2DType, find, Label, Node, RigidBody2D, Vec3 } from 'cc';
import { GameCtrl } from './GameCtrl';
const { ccclass, property } = _decorator;

@ccclass('StopResume')
export class StopResume extends Component {

    @property({
        type: Label,
        tooltip: 'Resume'
    })
    public resume: Label;

    @property({
        type: Label,
        tooltip: 'Pause'
    })

    public pause: Label;
    private touchStartCallback: Function = null;
    public TextLocation: Vec3 = new Vec3(-150, 0, 0);

    public game: GameCtrl;

    protected onLoad(): void {
        this.game = find('GameCtrl').getComponent(GameCtrl);
        this.resume.node.setPosition(this.TextLocation);
        this.pause.node.setPosition(this.TextLocation);
        this.pause.string = 'Press P to Pause';
        this.resume.string = 'Press R to Resume';
        this.resume.node.active = false;
        this.pause.node.active = true;
    }

    resumeGame() {
        this.game.changeSpeed(-2);
        this.resume.node.active = false;
        this.pause.node.active = true;
        this.game.bird.getComponent(RigidBody2D).type = ERigidBody2DType.Dynamic;
        this.game.node.on(Node.EventType.TOUCH_START, this.game.enableTouch, this.game);
    }

    pauseGame() {
        this.game.changeSpeed(-1);
        this.resume.node.active = true;
        this.pause.node.active = false;
        this.game.bird.getComponent(RigidBody2D).type = ERigidBody2DType.Static;
        this.game.node.off(Node.EventType.TOUCH_START, this.touchStartCallback, this);
    }
}

