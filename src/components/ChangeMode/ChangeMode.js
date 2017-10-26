import React from "react";
import Button from "./../Button/Button";
import Styles from "./ChangeMode.scss";
class ChangeMode extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(mode) {
        this.props.clickHandler(mode);
    }

    render() {
        return (
            <div className="component-change_mode">
                <Button clickHandler={this.handleClick} active={this.props.active == 'mode1'} operation={"mode1"} additionalClass="rounded w-50"/>
                <Button clickHandler={this.handleClick} active={this.props.active == 'mode2'} operation={"mode2"} additionalClass="rounded w-50"/>
            </div>
        )
    }
}
ChangeMode.propTypes = {
    clickHandler: React.PropTypes.func,
    currentMode: React.PropTypes.string
};

export default ChangeMode;