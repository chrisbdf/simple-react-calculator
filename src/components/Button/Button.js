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
    getClassName(){
        return 'component-button ' + (this.props.orange ? 'orange' : '');
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
    orange: React.PropTypes.bool,
};

export default Button;