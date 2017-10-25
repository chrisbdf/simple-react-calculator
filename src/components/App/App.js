import React from "react";
import Display from "./../Display/Display";
import ButtonsList from "./../ButtonsList/ButtonsList";
import calculate from "../../logic/calculate";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: null,
            total: null,
            operation: null,
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);

    }

    handleButtonClick(buttonName) {
        this.setState(calculate(this.state, buttonName));
    }

    render() {
        return (
            <div className="component-calculator">
                <Display value={this.state.next || this.state.total || '0'}/>
                <ButtonsList clickHandler={this.handleButtonClick}/>
            </div>
        )
    }

}
