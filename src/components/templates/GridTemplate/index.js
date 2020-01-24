
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'
import Header from '../../organism/Header'
import Table from '../../molecules/Table'
import { connect } from 'react-redux'



const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: ${size('maxWidth')};
`

const tableData = {
    columns: [{
        "label": "Invoice Id",
        "key": "invoiceId"
    }, {
        "label": "Reference",
        "key": "reference"
    }, {
        "label": "Maturity Date",
        "key": "maturityDate"
    }, {
        "label": "Invoice Amount",
        "key": "invoiceAmt"
    }, {
        "label": "Currency",
        "key": "currency"
    }, {
        "label": "Buyer",
        "key": "buyer"
    }, {
        "label": "Supplier",
        "key": "supplier"
    }, {
        "label": "Invoice Date",
        "key": "invoiceDate"
    }
    ]

};

class GridTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.options = {}

    }

    getInvoices() {
        debugger
        let filterdInvoices = this.props.filterdInvoices;

        if (filterdInvoices.length != 0)
            return <Table columns={tableData.columns} rows={filterdInvoices} />
        else
            return "NO Data";
    }

    render() {
        return (
            <Content>
                {this.getInvoices()}
            </Content>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        filterdInvoices: state.filterdInvoices,
        amtFrom: state.amtFrom,
    }
}

export default connect(mapStateToProps)(GridTemplate)
