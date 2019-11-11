'use strict';

import invoice from '@/store/invoice';
import stat from '@/views/pages/invoice/Stat.vue';
import ChartComparison from './ChartComparison.vue';

export default{
    components: { ChartComparison, 'global-stat': stat },

    data() {
        return {
            invoice: [],

            revenueComparison: {
                series: [],
                categories: []
            },

            invoicePaid: {
                series: [],
                categories: []
            }
        }
    },

    methods: {
        invoiceItem(item) {
            return {
                id: parseInt(item.id),
                number: item.number,
                billing_name: item.billing_name,
                amount_total: parseFloat(item.amount_total),
                amount_paid: parseFloat(item.amount_paid),
                amount_due: parseFloat(item.amount_due),
                date_at: item.date_at,
                paid_at: item.paid_at,
                status: item.status
            };
        },

        load() {
            return invoice.dispatch('list').then(({ data }) => {
                this.invoice = data.map(item => this.invoiceItem(item));
            }).then(() => {
                const data = this.cartData(this.invoice);

                this.setRevenueComparison(data);
                this.setInvoicePaid(data);
            }).catch(e => {
                this.$notify.error(this.$vs, e);
            });
        },

        setRevenueComparison(list) {
            let series = [
                { name: 'Este Año', data: new Map(), total: 0 },
                { name: 'Año anterior', data: new Map(), total: 0 }
            ];

            const date = new Date(),
                dateString = '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-01 00:00:00';

            const lastYearStart = new Date((date.getFullYear() - 2) + dateString);
            const lastYearEnd = new Date((date.getFullYear() - 1) + dateString);

            const categories = this.chartCategories(lastYearEnd, series);

            list.forEach(item => {
                if (item.date_key < lastYearStart) {
                    return;
                }

                const index = (item.date_key > lastYearEnd) ? 0 : 1;

                series[index].data.set(item.date_key_month, series[index].data.get(item.date_key_month) + item.amount_total);
                series[index].total += item.amount_total;
            });

            series.forEach(item => {
                item.data = Array.from(item.data.values());
            });

            this.revenueComparison.series = series;
            this.revenueComparison.categories = categories;
        },

        setInvoicePaid(list) {
            let series = [
                { name: 'Facturado', data: new Map(), total: 0 },
                { name: 'Cobrado', data: new Map(), total: 0 },
                { name: 'Pendiente', data: new Map(), total: 0 }
            ];

            const date = new Date(),
                dateString = '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-01 00:00:00',
                startAt = new Date((date.getFullYear() - 1) + dateString);

            const categories = this.chartCategories(startAt, series, true);

            let amountTotal = 0, amountPaid = 0, amountDue = 0,
                months = [{}, {}, {}];

            list.forEach(item => {
                if (item.date_key < startAt) {
                    return;
                }

                amountTotal += item.amount_total;
                amountPaid += item.amount_paid;
                amountDue += item.amount_due;

                months[0][item.date_key_year] = amountTotal;
                months[1][item.date_key_year] = amountPaid;
                months[2][item.date_key_year] = amountDue;
            });

            let previous = [];

            categories.forEach(each => {
                if (!months[0][each]) {
                    months[0][each] = previous[0];
                    months[1][each] = previous[1];
                    months[2][each] = previous[2];
                }

                series[0].data.set(each, months[0][each]);
                series[1].data.set(each, months[1][each]);
                series[2].data.set(each, months[2][each]);

                previous = [months[0][each], months[1][each], months[2][each]];
            });

            series.forEach(item => {
                item.data = Array.from(item.data.values());
            });

            this.invoicePaid.series = series;
            this.invoicePaid.categories = categories;
        },

        cartData(data) {
            return data.slice(0)
                .map(item => {
                    const date = item.date_at.split('-');

                    item.date_key = new Date(date[0] + '-' + ('0' + parseInt(date[1])).slice(-2) + '-01 00:00:00');
                    item.date_key_month = ('0' + parseInt(date[1])).slice(-2);
                    item.date_key_year = date[0] + '/' + item.date_key_month;

                    return item;
                })
                .filter(item => !isNaN(item.date_key))
                .sort((a, b) => (a.date_at > b.date_at) ? 1 : -1);
        },

        chartCategories(date, series, year) {
            let categories = [],
                startAt = new Date(date),
                endAt = new Date();

            startAt.setMonth(date.getMonth() + 1);

            while (startAt <= endAt) {
                let month = startAt.getMonth(),
                    monthString = ('0' + (parseInt(month) + 1)).slice(-2),
                    key = year ? (startAt.getFullYear() + '/' + monthString) : monthString;

                categories.push(key);

                series.forEach(item => {
                    item.data.set(key, 0);
                });

                startAt.setMonth(month + 1);
            }

            return categories;
        }
    },

    created() {
        this.load();
    }
}