import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;
import { Pipes } from './Pipes';

@ccclass('Results')
export class Results extends Component {
    @property({
        type:Label
    })
    public scoreLabel : Label;

    @property({
        type:Label
    })
    public highScore : Label;

    @property({
        type:Label
    })
    public resultEnd : Label;

    maxScore : number = 0;
    currentScore : number;
    public lastScore : number = 0;

    updateScore(num : number) {
        this.currentScore = num;
        this.scoreLabel.string = ('' + this.currentScore)
    }

    resetScore() {
        this.updateScore(0);
        this.lastScore = 0;
        this.hideResults();
    }

    addScore() {
        this.updateScore(this.currentScore + 1);
        if (this.currentScore - this.lastScore >= 10) {
            this.lastScore = this.currentScore;
            
        }
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

