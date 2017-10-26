import React from "react";
import Display from "./../Display/Display";
import ButtonsList from "./../ButtonsList/ButtonsList";
import ChangeMode from "./../ChangeMode/ChangeMode";
import calculate from "../../logic/calculate";
import calculateString from "../../logic/calculateString";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: null,
            total: null,
            operation: null,
            mode: 'mode1'
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleChangeModeClick = this.handleChangeModeClick.bind(this);

    }

    handleButtonClick(buttonName) {
        if (this.state.mode == 'mode1') {
            this.setState(calculate(this.state, buttonName));
        } else {
            this.setState(calculateString(this.state, buttonName));
        }
    }

    handleChangeModeClick(mode) {
        // clear current state on change mode
        if (mode !== this.state.mode) {
            this.setState({
                next: null,
                total: null,
                operation: null,
                mode: mode
            });
        }
    }

    render() {
        return (
            <div className="component-calculator">
                <ChangeMode clickHandler={this.handleChangeModeClick} active={this.state.mode}/>
                <Display value={this.state.next || this.state.total || '0'}/>
                <ButtonsList clickHandler={this.handleButtonClick}/>
            </div>
        )
    }

}
