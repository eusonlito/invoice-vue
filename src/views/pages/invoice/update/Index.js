'use strict';

import company from '@/store/company';
import file from '@/store/invoice-file';
import invoice from '@/store/invoice';
import updateItem from './Item.vue'

export default {
    components: { updateItem },

    data() {
        return {
            id: this.$route.params.id,

            breadcrumb: {
                items: [
                    {
                        title: 'Facturas',
                        url: 'invoice-index'
                    }
                ]
            },

            items: [],

            client_address: null,
            discount: [],
            invoice_recurring: [],
            invoice_serie: [],
            invoice_status: [],
            payment: [],
            product: [],
            shipping: [],
            tax: [],

            submitButton: {
                disabled: false,
                text: 'Guardar'
            },

            files: [],

            form: {
                number: '',

                company_name: '',
                company_address: '',
                company_city: '',
                company_state: '',
                company_postal_code: '',
                company_country: '',
                company_tax_number: '',

                billing_name: '',
                billing_address: '',
                billing_city: '',
                billing_state: '',
                billing_postal_code: '',
                billing_country: '',
                billing_tax_number: '',

                shipping_name: '',
                shipping_address: '',
                shipping_city: '',
                shipping_state: '',
                shipping_postal_code: '',
                shipping_country: '',

                percent_discount: 0,
                percent_tax: 0,

                amount_subtotal: 0,
                amount_discount: 0,
                amount_tax: 0,
                amount_shipping: 0,
                amount_total: 0,
                amount_paid: 0,
                amount_due: 0,

                date_at: '',
                paid_at: '',
                required_at: '',

                comment_private: '',
                comment_public: '',

                client_id: null,
                client_address_billing_id: null,
                client_address_shipping_id: null,
                discount_id: null,
                invoice_recurring_id: null,
                invoice_serie_id: null,
                invoice_status_id: null,
                payment_id: null,
                shipping_id: null,
                tax_id: null,
            }
        }
    },

    computed: {
        validate() {
            return !this.errors.any();
        },

        client_address_billing() {
            return this.client_address.filter(data => data.billing);
        },

        client_address_shipping() {
            return this.client_address.filter(data => {
                return data.shipping && this.form.client_id === data.client.id;
            });
        }
    },

    methods: {
        load() {
            if (this.id) {
                this.getUpdateWrapper(this.id);
            } else {
                this.getCreateWrapper();
                this.getCompany();
            }
        },

        getCompany() {
            company.commit('LOAD');

            this.form.company_name = company.state.company.name;
            this.form.company_address = company.state.company.address;
            this.form.company_city = company.state.company.city;
            this.form.company_state = company.state.company.state;
            this.form.company_postal_code = company.state.company.postal_code;
            this.form.company_country = company.state.company.country.name;
            this.form.company_tax_number = company.state.company.tax_number;

            this.itemAdded(0);
        },

        getCreateWrapper() {
            return invoice.dispatch('createWrapper').then(({ data }) => {
                this.setRelations(data);

                this.form.date_at = new Date;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        getUpdateWrapper(id) {
            return invoice.dispatch('updateWrapper', id).then(({ data }) => {
                this.setRelations(data);
                this.setInvoice(data.invoice);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        setRelations(data) {
            this.setClientAddress(data.client_address);
            this.setDiscount(data.discount);
            this.setInvoiceRecurring(data.invoice_recurring);
            this.setInvoiceSerie(data.invoice_serie);
            this.setInvoiceStatus(data.invoice_status);
            this.setPayment(data.payment);
            this.setProduct(data.product);
            this.setShipping(data.shipping);
            this.setTax(data.tax);
        },

        setInvoice(data) {
            Object.assign(this.form, data);

            this.form.client_id = data.clientAddressBilling.client.id;
            this.form.client_address_billing_id = data.clientAddressBilling ? data.clientAddressBilling.id : null;
            this.form.client_address_shipping_id = data.clientAddressShipping ? data.clientAddressShipping.id : null;
            this.form.discount_id = data.discount ? data.discount.id : null;
            this.form.payment_id = data.payment ? data.payment.id : null;
            this.form.shipping_id = data.shipping ? data.shipping.id : null;
            this.form.invoice_recurring_id = data.recurring ? data.recurring.id : null;
            this.form.invoice_serie_id = data.serie ? data.serie.id : null;
            this.form.invoice_status_id = data.status ? data.status.id : null;
            this.form.tax_id = data.tax ? data.tax.id : null;

            this.items = data.items.map(item => {
                return {...item, ...{ key: item.id } };
            });

            this.files = data.files;
        },

        setClientAddress(data) {
            this.client_address = data;
        },

        setDiscount(data) {
            const selected = data.filter(value => value.default)[0];

            this.discount = data;

            if (selected) {
                this.form.discount_id = selected.id;
            }
        },

        setInvoiceRecurring(data) {
            this.invoice_recurring = data;
        },

        setInvoiceSerie(data) {
            const selected = data.filter(value => value.default)[0];

            this.invoice_serie = data;

            if (selected) {
                this.form.invoice_serie_id = selected.id;
            }
        },

        setInvoiceStatus(data) {
            const selected = data.filter(value => value.default)[0];

            this.invoice_status = data;

            if (selected) {
                this.form.invoice_status_id = selected.id;
            }
        },

        setPayment(data) {
            const selected = data.filter(value => value.default)[0];

            this.payment = data;

            if (selected) {
                this.form.payment_id = selected.id;
            }
        },

        setProduct(data) {
            this.product = data;
        },

        setShipping(data) {
            const selected = data.filter(value => value.default)[0];

            this.shipping = data;

            if (selected) {
                this.form.shipping_id = selected.id;
            }
        },

        setTax(data) {
            const selected = data.filter(value => value.default)[0];

            this.tax = data;

            if (selected) {
                this.form.tax_id = selected.id;
            }
        },

        setNumber(data) {
            if (!data || this.id) {
                return;
            }

            let number = data.number_next.toString() || '1';

            if (data.number_fill) {
                number = number.padStart(data.number_fill.toString(), '0');
            }

            if (data.number_prefix) {
                number = data.number_prefix + number;
            }

            this.form.number = number;
        },

        clientAddressBillingSelected(data) {
            if (!data) {
                return false;
            }

            this.form.client_id = data.client.id;
            this.form.client_address_billing_id = data.id;
            this.form.billing_name = data.name;
            this.form.billing_address = data.address;
            this.form.billing_postal_code = data.postal_code;
            this.form.billing_city = data.city;
            this.form.billing_state = data.state;
            this.form.billing_country = data.country;
            this.form.billing_tax_number = data.tax_number;
        },

        clientAddressShippingSelected(data) {
            if (!data) {
                return false;
            }

            this.form.client_address_shipping_id = data.id;
            this.form.shipping_name = data.name;
            this.form.shipping_address = data.address;
            this.form.shipping_postal_code = data.postal_code;
            this.form.shipping_city = data.city;
            this.form.shipping_state = data.state;
            this.form.shipping_country = data.country;
        },

        itemAdded(index) {
            this.items.splice(index + 1, 0, { key: this.itemKey() });
        },

        itemDeleted(index) {
            if (this.items.length > 1) {
                this.$refs.items[index].form = {};
                this.items.splice(index, 1);
            }

            this.calculateSubtotal();
        },

        itemUpdated() {
            this.calculateSubtotal();
        },

        itemKey() {
            return Math.random().toString(36).substr(2, 9);
        },

        invoiceSerieChange() {
            if (!this.form.invoice_serie_id) {
                return;
            }

            const serie = this.invoice_serie.filter(each => each.id === this.form.invoice_serie_id)[0];

            if (serie) {
                this.setNumber(serie);
            }
        },

        paymentChange() {
            if (!this.form.payment_id || this.form.comment_public) {
                return;
            }

            const payment = this.payment.filter(each => each.id === this.form.payment_id)[0];

            if (payment) {
                this.form.comment_public = payment.description;
            }
        },

        calculateSubtotal() {
            this.form.amount_subtotal = this.float(this.$refs.items.reduce((subtotal, item) => {
                return subtotal + this.parseFloat(item.form.amount_subtotal || 0);
            }, 0));
        },

        calculateDiscount() {
            if (!this.form.discount_id) {
                return this.form.amount_discount = this.float(0);
            }

            const discount = this.discount.filter(each => each.id === this.form.discount_id)[0];

            if (!discount) {
                return;
            }

            const value = this.parseFloat(discount.value);
            const amount_subtotal = this.parseFloat(this.form.amount_subtotal);

            let amount_discount = 0;

            if (discount.type === 'fixed') {
                amount_discount = value;
            } else if (discount.type === 'percent') {
                amount_discount = amount_subtotal * value / 100;
            }

            this.form.amount_discount = this.float(amount_discount);
        },

        calculateTax() {
            if (!this.form.tax_id) {
                return this.form.amount_tax = this.float(0);
            }

            const tax = this.tax.filter(each => each.id === this.form.tax_id)[0];

            if (!tax) {
                return;
            }

            const value = this.parseFloat(tax.value);
            const amount_subtotal = this.parseFloat(this.form.amount_subtotal);

            this.form.amount_tax = this.float(amount_subtotal * value / 100);
        },

        calculateShipping() {
            if (!this.form.shipping_id) {
                return;
            }

            const shipping = this.shipping.filter(each => each.id === this.form.shipping_id)[0];

            if (!shipping) {
                return;
            }

            this.form.amount_shipping = this.float(shipping.value);
        },

        calculateTotal() {
            const amount_subtotal = this.parseFloat(this.form.amount_subtotal);
            const amount_discount = this.parseFloat(this.form.amount_discount);
            const amount_tax = this.parseFloat(this.form.amount_tax);
            const amount_shipping = this.parseFloat(this.form.amount_shipping);

            this.form.amount_total = this.float(amount_subtotal - amount_discount + amount_tax + amount_shipping);

            this.setPaid(this.form.amount_paid);
        },

        setPaid(value) {
            const total = this.parseFloat(this.form.amount_total);

            value = this.parseFloat((typeof value === 'string') ? value : this.form.amount_paid);

            this.form.amount_due = this.float((total - value) > 0 ? (total - value) : 0);
            this.form.amount_paid = this.float(value);
        },

        setInvoiceStatusPaid() {
            const invoice_status = this.invoice_status.filter(each => each.paid)[0];

            if (invoice_status) {
                this.form.invoice_status_id = invoice_status.id;
            }
        },

        parseFloat(value) {
            return this.$options.filters.parseFloat(value);
        },

        float(value) {
            return this.$options.filters.float(value);
        },

        fileView(selected) {
            return file.dispatch('download', selected.id).then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        fileUpload(selected) {
            return file.dispatch('create', { invoice_id: this.form.id, file: selected }).then(({ data }) => {
                this.notifySuccess('OK :)');
                this.files.push(data);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        fileDelete(selected) {
            return file.dispatch('delete', selected.id).then(() => {
                this.notifySuccess('OK :)');
                this.files = this.files.filter(data => data.id !== selected.id);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        submit() {
            this.$validator.validate().then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                this.submitButton.disabled = true;
                this.submitButton.text = 'Enviando...';

                if (this.parseFloat(this.form.amount_due) === 0.0) {
                    this.setInvoiceStatusPaid();
                }

                this.form.items = this.$refs.items.map(item => item.form);

                return invoice.dispatch('createOrUpdate', { id: this.$route.params.id, payload: this.form })
                    .then(({ data }) => this.success(data))
                    .catch(e => this.notifyError(e))
                    .finally(() => {
                        this.submitButton.disabled = false;
                        this.submitButton.text = 'Guardar';
                    });
            });
        },

        success(data) {
            this.notifySuccess('OK :)');

            if (!this.id) {
                this.$router.push({ name: this.$route.name , params: { id: data.id }});
            }

            this.files = data.files;
        },

        deleteConfirm() {
            this.confirmDanger({
                title: 'Confirmar Borrado',
                text: 'Recuerda que esta acción no se puede deshacer!',
                accept: this.delete
            });
        },

        delete() {
            return invoice.dispatch('delete', this.$route.params.id).then(() => {
                this.notifySuccess('OK :)');
                this.$router.push({ name: 'invoice-index' });
            }).catch(e => {
                this.notifyError(e);
            });
        },
    },

    created() {
        this.load();
    },

    watch: {
        ['form.invoice_serie_id']() {
            this.invoiceSerieChange();
        },

        ['form.payment_id']() {
            this.paymentChange();
        },

        ['form.discount_id']() {
            this.calculateDiscount();
        },

        ['form.tax_id']() {
            this.calculateTax();
        },

        ['form.shipping_id']() {
            this.calculateShipping();
        },

        ['form.amount_discount']() {
            this.calculateTotal();
        },

        ['form.amount_tax']() {
            this.calculateTotal();
        },

        ['form.amount_subtotal']() {
            this.calculateDiscount();
            this.calculateTax();
            this.calculateTotal();
        }
    }
}
