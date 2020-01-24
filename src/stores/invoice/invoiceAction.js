import { ADD_INVOICES, GET_INVOICES } from "./constants/action-types";
import InvoiceEffect from './invoiceEffect'


// The action creators
export const filterInvoice = (data) => ({
    type: GET_INVOICES,
    payload: data
})

export const addInvoice = (data) => ({
    type: ADD_INVOICES,
    payload: data
})







