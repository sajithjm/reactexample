import React from 'react'
import Label from '../../atoms/Label'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import DropDown from '../../atoms/DropDown'
import { filterInvoice, addInvoice } from '../../../stores/invoice/invoiceAction'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import './searchbar.css'
import * as myConstClass from '../../../constants'
import InvoiceEffect from '../../../stores/invoice/invoiceEffect'


const state = {
    matStartDate: new Date(),
    matEndDate: new Date()
};
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.options = {}
    }

    componentDidMount() {
        InvoiceEffect.getInvoices().then(result => this.props.addInvoice(result));
    }

    startChange = date => {
        this.setState({
            matStartDate: date
        });
    };
    endChange = date => {
        this.setState({
            matEndDate: date
        });
    };
    onCCYChange = (e) => {
        this.setState({ cCyValue: e.target.value });
    }
    onRangeFromChange = (e) => {
        this.setState({ rangeFromValue: e.target.value });
    }
    onRangeToChange = (e) => {
        this.setState({ rangeToValue: e.target.value });
    }

    handleClick = () => {
        this.props.filterInvoice(this.state);
    }

    render() {
        const name = this.props.searchBoxName || undefined
        return (
            <div className="searchBox">
                <li><Label labelValue={"Currency"} />
                    <DropDown options={myConstClass.ccyOptions} onChange={this.onCCYChange} /></li>
                <li><Label labelValue={"Range From"} />
                    <DropDown options={myConstClass.rangeOptions} onChange={this.onRangeFromChange} /></li>
                <li><Label labelValue={"Range To"} />
                    <DropDown options={myConstClass.rangeOptions} onChange={this.onRangeToChange} /></li>
                <li>
                    <Label labelValue={"Start Date"} />
                    <DatePicker
                        dateFormat={myConstClass.date_format}
                        selected={this.state.matStartDate}
                        onChange={this.startChange}
                    /></li>
                <li >
                    <Label labelValue={"End Date"} />

                    <DatePicker
                        dateFormat={myConstClass.date_format}
                        selected={this.state.matEndDate}
                        onChange={this.endChange}
                    /></li>

                <li><Button buttonName={"searchbutton"} label={"Search"} handleClick={(e) => this.handleClick(e)} /></li>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addInvoice: (body) => { dispatch(addInvoice(body)) },
        filterInvoice: (body) => { dispatch(filterInvoice(body)) }
    }


}
export default connect(null, mapDispatchToProps)(SearchBar);
