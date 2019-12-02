'use strict';

import file from '@/store/invoice-file';
import invoice from '@/store/invoice';
import stat from './Stat.vue';

export default {
    components: { stat },

    data() {
        return {
            list: null,

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
            return invoice.dispatch('export').then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        download(selected) {
            return file.dispatch('main', selected.id).then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.notifyError(e);
            });
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
        },
    },

    created() {
        this.load();
    }
}
