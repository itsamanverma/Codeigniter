import React, { Component } from "react";
import { TextFeild } from "@meterial-ui/core";


export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            color: this.props.color
        }
        this.sendDataToParent = this.sendDataToParent.bind(this);
    }
    sendDataToParent(event) {
        this.setState({ data: event.targert.value })
        this.props.onChange(event, event.target.value)
    }

    render() {
        return (
            <TextFeild
                className='label'
                name={this.props.name}
                type={this.props.type}
                placeholder={this.props.placeholder}
                label={this.props.label}
                onChange={this.sendDataToParent}
                fullwidth
                color={this.state.color}
                required={this.props.required}
            />
        );
    }
} 