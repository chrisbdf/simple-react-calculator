import React from "react";
import Styles from "./Button.scss";
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.clickHandler(this.props.operation);
    }

    getClassName() {
        let preparedClass = 'component-button ';
        if (this.props.additionalClass) {
            preparedClass += ' ' + this.props.additionalClass
        }
        if (this.props.active) {
            preparedClass += ' active';
        }
        return preparedClass;
    }

    render() {
        return (
            <div className={this.getClassName()}>
                <button onClick={this.handleClick}>
                    {this.props.operation}
                </button>
            </div>
        )
    }
}
Button.propTypes = {
    operation: React.PropTypes.string,
    clickHandler: React.PropTypes.func,
    additionalClass: React.PropTypes.string,
    active: React.PropTypes.bool,
};

export default Button;