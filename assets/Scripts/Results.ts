import { _decorator, Component, find, Label, Node } from 'cc';
const { ccclass, property } = _decorator;
import { Pipes } from './Pipes';
import { GameCtrl } from './GameCtrl';

@ccclass('Results')
export class Results extends Component {
    @property({
        type: Label
    })
    public scoreLabel: Label;

    @property({
        type: Label
    })
    public highScore: Label;

    @property({
        type: Label
    })
    public resultEnd: Label;

    maxScore: number = 0;
    currentScore: number;

    public game: GameCtrl;

    protected onLoad(): void {
        this.game = find('GameCtrl').getComponent('GameCtrl') as GameCtrl;
    }

    updateScore(num: number) {
        this.currentScore = num;
        this.scoreLabel.string = ('' + this.currentScore)
    }

    checkScore() {
        return this.currentScore / 5;
    }

    resetScore() {
        this.updateScore(0);
        this.hideResults();
    }

    addScore() {
        this.updateScore(this.currentScore + 1);
        this.game.changeSpeed(this.checkScore());
    }

    showResults() {
        this.maxScore = Math.max(this.currentScore, this.maxScore);

        this.highScore.string = ('High Score ' + this.maxScore);

        this.resultEnd.node.active = true;
        this.highScore.node.active = true;
    }

    hideResults() {
        this.highScore.node.active = false;
        this.resultEnd.node.active = false;
    }

}

