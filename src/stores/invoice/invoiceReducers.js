import { GET_INVOICES, ADD_INVOICES, SEARCH_INVOICES } from "./constants/action-types";

const initialState = {
    invoices: [],
    filterdInvoices: [],
    amtFrom: 0,
    amtTo: 0,
    currency: '',
    startDate: '',
    endDate: ''
};
const InvoiceReducer = (state = initialState, action) => {

    const newState = { ...state };

    if (action.type === ADD_INVOICES) {
        return Object.assign({}, state, {
            invoices: newState.invoices.concat(action.payload),
            filterdInvoices: newState.invoices.concat(action.payload),
        });
    }
    debugger
    if (action.type === GET_INVOICES) {
        newState.amtFrom = parseInt(action.payload.rangeFromValue);
        newState.amtTo = parseInt(action.payload.rangeToValue);
        newState.currency = action.payload.cCyValue;
        newState.startDate = new Date(action.payload.matStartDate);
        newState.endDate = new Date(action.payload.matEndDate);
        debugger
        newState.filterdInvoices = newState.invoices.filter(function (el) {

            let spl = el.maturityDate.split('/');
            let rowDate = new Date(spl[2], spl[1], spl[0]);
            return el.invoiceAmt >= newState.amtFrom && el.invoiceAmt <= newState.amtTo && el.currency == newState.currency && (rowDate >= newState.startDate && rowDate <= newState.endDate)
        });
    }
    return newState;
}
export default InvoiceReducer;