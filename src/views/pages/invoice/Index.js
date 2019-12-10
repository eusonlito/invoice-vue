'use strict';

import file from '@/store/invoice-file';
import invoice from '@/store/invoice';
import stat from './Stat.vue';

export default {
    components: { stat },

    data() {
        return {
            total: null,
            list: null,

            invoice_recurring: [],
            invoice_serie: [],
            invoice_status: [],
            payment: [],

            events: {},

            form: {
                date_start: null,
                date_end: null,
                invoice_recurring_id: null,
                invoice_serie_id: null,
                invoice_status_id: null,
                payment_id: null
            },

            export_prompt: false,

            export_form: {
                format: 'json',
                filter: '1'
            },

            export_form_options: {
                format: [
                    {
                        id: 'json',
                        name: 'JSON'
                    },

                    {
                        id: 'csv',
                        name: 'CSV'
                    },

                    {
                        id: 'zip',
                        name: 'ZIP'
                    }
                ],

                filter: [
                    {
                        id: '1',
                        name: 'Sólo los Filtrados'
                    },

                    {
                        id: '0',
                        name: 'Todos los Registros'
                    }
                ]
            },

            breadcrumb: {
                items: [
                    {
                        title: 'Facturas',
                        url: 'invoice-index'
                    }
                ],

                buttons: [
                    {
                        title: 'Añadir',
                        url: 'invoice-update'
                    },
                    {
                        title: 'Exportar',
                        click: () => this.exportPrompt()
                    }
                ]
            }
        }
    },

    methods: {
        item(item) {
            return {
                id: parseInt(item.id),
                number: item.number,
                billing_name: item.billing_name,
                amount_total: parseFloat(item.amount_total),
                amount_paid: parseFloat(item.amount_paid),
                amount_due: parseFloat(item.amount_due),
                date_at: item.date_at,
                paid_at: item.paid_at,
                serie: item.serie,
                status: item.status
            };
        },

        load() {
            return this.getIndexWrapper();
        },

        getIndexWrapper() {
            return invoice.dispatch('listWrapper').then(({ data }) => {
                this.setRelations(data);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        setRelations(data) {
            this.setInvoice(data.invoice);
            this.setInvoiceRecurring(data.invoice_recurring);
            this.setInvoiceSerie(data.invoice_serie);
            this.setInvoiceStatus(data.invoice_status);
            this.setPayment(data.payment);

            this.total = data.invoice.length;
        },

        setInvoice(data) {
            this.list = data.map(item => this.item(item));
        },

        setInvoiceRecurring(data) {
            this.invoice_recurring = data;
        },

        setInvoiceSerie(data) {
            this.invoice_serie = data;
        },

        setInvoiceStatus(data) {
            this.invoice_status = data;
        },

        setPayment(data) {
            this.payment = data;
        },

        submit() {
            const event = 'invoice-list';

            if (this.eventRunning(event)) {
                return;
            }

            this.eventRun(event);

            return invoice.dispatch('list', this.dateToDate(this.form, ['date_start', 'date_end']))
                .then(({ data }) => this.setInvoice(data))
                .catch(e => this.notifyError(e))
                .finally(() => this.eventFinish(event));
        },

        clean() {
            this.form = Object.assign(this.form, {
                date_start: null,
                date_end: null,
                invoice_recurring_id: null,
                invoice_serie_id: null,
                invoice_status_id: null,
                payment_id: null
            });

            return this.submit();
        },

        exportPrompt() {
            this.export_prompt = true;
        },

        exportAccept() {
            const event = 'invoice-export';

            if (this.eventRunning(event)) {
                return;
            }

            this.eventRun(event);

            this.notifyWarning('Por favor, espera mientras generamos el fichero');

            return invoice.dispatch('exportFormatFilter', {
                format: this.export_form.format,
                filter: this.export_form.filter,
                payload: this.dateToDate(this.form, ['date_start', 'date_end'])
            }).then(response => this.downloadBlob(response))
                .catch(e => this.notifyError(e))
                .finally(() => this.eventFinish(event));
        },

        download(selected) {
            const event = 'invoice-download-' + selected.id;

            if (this.eventRunning(event)) {
                return;
            }

            this.eventRun(event);

            return file.dispatch('main', selected.id).then(response => this.downloadBlob(response))
                .catch(e => this.notifyError(e))
                .finally(() => this.eventFinish(event));
        },

        paid(selected) {
            const event = 'invoice-paid-' + selected.id;

            if (selected.status.paid || this.eventRunning(event)) {
                return;
            }

            this.eventRun(event);

            return invoice.dispatch('paid', selected.id).then(({ data }) => this.paidSuccess(selected, data))
                .catch(e => this.notifyError(e))
                .finally(() => this.eventFinish(event));
        },

        paidSuccess(selected, data) {
            selected.amount_paid = data.amount_paid;
            selected.amount_due = data.amount_due;
            selected.paid_at = data.paid_at;
            selected.status = data.status;

            this.notifySuccess('OK :)');
        },

        update(selected) {
            this.$router.push({ name: 'invoice-update', params: { id: selected } });
        },

        money(amount) {
            return this.$options.filters.money(amount);
        },

        percent(total, partial) {
            return this.$options.filters.percent(total, partial);
        },

        color(total, partial, reverse) {
            const percent = (partial * 100) / total;

            if (percent > 95) {
                return reverse ? 'danger' : 'success';
            }

            if (percent > 30) {
                return 'warning';
            }

            return reverse ? 'success' : 'danger';
        }
    },

    created() {
        this.load();
    }
}
