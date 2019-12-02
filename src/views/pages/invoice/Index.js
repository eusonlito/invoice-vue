'use strict';

import file from '@/store/invoice-file';
import invoice from '@/store/invoice';
import stat from './Stat.vue';

export default {
    components: { stat },

    data() {
        return {
            list: null,

            events: {},

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
                        click: () => this.export()
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
            return invoice.dispatch('list').then(({ data }) => {
                this.list = data.map(item => this.item(item));
            }).catch(e => {
                this.notifyError(e);
            });
        },

        export() {
            const event = 'invoice-export';

            if (this.eventRunning(event)) {
                return;
            }

            this.eventRun(event);

            return invoice.dispatch('export').then(response => this.downloadBlob(response))
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
