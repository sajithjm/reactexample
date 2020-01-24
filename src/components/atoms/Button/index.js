import React from 'react'
var buttonStyle = {
    margin: '10px 10px 10px 0'
};
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        const name = this.props.buttonName || undefined
        return (
            <div className="search-button">
                <button
                    className="btn btn-default"
                    style={buttonStyle}
                    onClick={this.props.handleClick}>{this.props.label}</button>
            </div>
        );
    }
}

export default Button;
