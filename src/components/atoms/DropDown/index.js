import React from 'react'
import Select from 'react-select';

var buttonStyle = {
    margin: '10px 10px 10px 0'
};
class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    createOptions = () => {
        let length = this.props.options.length;
        let options = [];
        for (let i = 0; i < length; i++) {
            options.push(<option key={this.props.options[i].value} value={this.props.options[i].value}>{this.props.options[i].label}</option>)
        }
        return options
    }

    render() {
        const name = this.props.name || undefined
        console.log(this.props)
        return (
            <select onChange={this.props.onChange}>
                {this.createOptions()}
            </select>
        );
    }
}

export default DropDown;
