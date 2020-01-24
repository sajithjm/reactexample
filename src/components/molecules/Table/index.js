import React from 'react'
import Label from '../../atoms/Label'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import DropDown from '../../atoms/DropDown'
import { useTable } from "react-table";
import "./index.css";
import { FormattedNumber, IntlProvider } from 'react-intl';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.options = {}
    }

    render() {

        var dataColumns = this.props.columns;
        var dataRows = this.props.rows;

        var tableHeaders = (<thead>
            <tr>
                {dataColumns.map(function (column) {
                    return <th align="center">{column.label}</th>;
                })}
            </tr>
        </thead>);

        var tableBody = dataRows.map(function (row) {
            return (<tbody>
                <tr>
                    {dataColumns.map(function (column) {

                        {
                            if ('invoiceAmt' == column.key) {
                                return <td align="center">
                                    <IntlProvider locale='en'>
                                        <FormattedNumber
                                            value={row[column.key]}
                                            style="currency"
                                            currency={row['currency']} />
                                    </IntlProvider>
                                </td>;
                            } else
                                return <td align="center">{row[column.key]}</td>;
                        }

                    })}
                </tr>
            </tbody>);
        });

        // Decorate with custom CSS
        return (<table className="table" width="100%">
            {tableHeaders}
            {tableBody}
        </table>)

    }

}


export default Table;
