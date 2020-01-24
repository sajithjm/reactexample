import React from 'react'
var buttonStyle = {
    margin: '10px 10px 10px 0'
};
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        const name = this.props.name || undefined
        return (
            <input name={name} className="search-input" id="search" type="text" placeholder={this.props.placeholder}
                onChange={this.props.onchange} onKeyPress={this.props.onKeyPress || null} />
        );
    }
}

export default Input;
