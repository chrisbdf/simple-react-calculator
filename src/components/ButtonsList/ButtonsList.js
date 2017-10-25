import React from "react";
import Button from "./../Button/Button";
import Styles from "./ButtonsList.scss";
export default class ButtonsList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(operation) {
        this.props.clickHandler(operation);
    }

    render() {
        return (
            <div className="component-buttons__container">
                <div>
                    {/*parse numbers*/}
                    {'1234567890'.split('').map(operation =>
                    <Button key={operation} operation={operation} clickHandler={this.handleClick}/>)}
                    {/*parse operations*/}
                    {'Cx-+='.split('').map(operation =>
                        <Button key={operation} operation={operation} orange clickHandler={this.handleClick}/>)}
                </div>
            </div>
        )
    }
}