import React, { Component } from 'react';

class Quiz extends Component {
    constructor(props){
        super(props);
        let riddle = this.playGame();
        let correct = false;
        let gameover = false;
        this.state ={riddle,correct,gameover};
        this.renderOptions = this.renderOptions.bind(this);
        this.checkResults = this.checkResults.bind(this);
    }

    checkResults(option){
        console.log("check resisad"+option);
        if(this.state.riddle.answer === option){
            console.log("correct answer");
            this.setState({
                correct: true,
                gameover: true
            });
        } else{
            console.log("wrong answer");
            this.setState({
                correct: false,
                gameover: true
            });
        }
    }

    randomNumber(min,max) {
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    generateRandomOptions(sum){
        let result = sum;
        let resultArray = [];
        let randomNumberArray = [];
        while(randomNumberArray.length<=3) {
            let randomNumber = this.randomNumber(1,19);
            if(randomNumberArray.indexOf(randomNumber) > -1) continue;
            randomNumberArray.push(randomNumber);
        }

        for(let i=0; i<3; i++) {
            let addSubtract = this.randomNumber(0,1);
            if(addSubtract ===1) {
                // add number to result
                result += randomNumberArray[i];
                resultArray.push(result);
            } else{
                // subtract number from the result.
                result -= randomNumberArray[i];
                resultArray.push(result);
            }
        }

        return resultArray;
    }

    playGame(){

        let field1 = this.randomNumber(20,50);
        let field2 = this.randomNumber(20,50);
        let result = field1+ field2;
        let resultArray = this.generateRandomOptions(result);
        resultArray.push(result);
        resultArray.sort(function(a,b){
            return 0.5 - Math.random();
        });

        return{
            resultArray: resultArray,
            field1: field1,
            field2: field2,
            answer: result
        };
    }

    renderOptions(){
        return (
            <div className="options">
                {this.state.riddle.resultArray.map((option,i) =>
                        <QuizOptions options={option} key={i} checkResults={(option)=>this.checkResults(option)} />
                    )}
                }
            </div>
        )
    }
    render(){
        return(
            <div className="quiz">
                <div className="quiz-content">
                    <p className="question">What is the sum of <span className="text-info">{this.state.riddle.field1}</span>
                            and <span className="text-info">{this.state.riddle.field2}</span> ?
                    </p>
                    {this.renderOptions()}
                    Correct: {this.state.correct ? "Correct" : "Wrong"}<br/>
                    Game Over: {this.state.gameover ? "Yes" : "No"}<br/>
                    <div className="play-again">
                        <a className="button">Play again</a>
                    </div>
                </div>
            </div>
        );
    }
}

// Options
class QuizOptions extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.callParentCheckOptions = this.callParentCheckOptions.bind(this);
    }
    callParentCheckOptions(){
        this.props.checkResults(this.props.options);
    }
    render(){
        return(
            <div className="fields" onClick={this.callParentCheckOptions}>
                <div className="field-block">{this.props.options}</div></div>
        );
    }
}


export default Quiz;