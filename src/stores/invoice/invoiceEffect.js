

export default class InvoiceEffect {



    static getInvoices() {
        return fetch('file.json')
            .then(res => res.json())

    }
}