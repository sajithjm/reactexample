import React from 'react'
var searchLabel = {
    margin: '1px'
};
class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        const value = this.props.labelValue || undefined

        return (
            <div style={searchLabel}>
                <label>{value}</label>
            </div>
        );
    }
}

export default Label;
