import React, { Component } from 'react';

class Quiz extends Component {
    constructor(props){
        super(props);
        let riddle = this.playGame();
        this.state ={riddle};
        this.renderOptions = this.renderOptions.bind(this);
    }

    randomNumber(min,max) {
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    playGame(){
        console.log(this.randomNumber(20,50),this.randomNumber(20,50));
        let field1 = this.randomNumber(20,50);
        let field2 = this.randomNumber(20,50);
        let result = field1+ field2;
        return{
            resultArray: [8,9,10,11],
            field1: field1,
            field2: field2,
            answer: result
        };
    }

    renderOptions(){
        return (
            <div className="options">
                {this.state.riddle.resultArray.map((option,i) =>
                        <QuizOptions options={option} key={i} />
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
    }
    render(){
        return(
            <div className="fields"><div className="field-block">{this.props.options}</div></div>
        );
    }
}


export default Quiz;