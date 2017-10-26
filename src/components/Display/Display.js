import React from "react";
import Styles from "./Display.scss";
export default class Display extends React.Component {
    render() {
        return (
            <div className="component-calculator__display__container">
                <div>
                    {this.props.value}
                </div>
            </div>
        )
    }
}