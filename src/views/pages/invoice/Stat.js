'use strict';

export default {
    name: 'stat',

    props: {
        list: Array
    },

    data() {
        return {
            stats: {
                count_total: 0,
                count_paid: 0,
                count_due: 0,
                count_partial: 0,
                amount_total: 0,
                amount_paid: 0,
                amount_due: 0,
                amount_partial: 0,
            },

            options: [
                {
                    title: 'Total',
                    value: 0
                },

                {
                    title: '1 mes',
                    value: 30
                },

                {
                    title: '3 meses',
                    value: 90
                },

                {
                    title: '6 meses',
                    value: 180
                },

                {
                    title: '1 año',
                    value: 365
                }
            ],

            current: {}
        }
    },

    computed: {
        numberFormat() {
            return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
        }
    },

    methods: {
        load(selected) {
            this.list.forEach(item => this.filterDate(selected, item));
        },

        reset() {
            this.stats = {
                count_total: 0,
                count_paid: 0,
                count_due: 0,
                count_partial: 0,
                amount_total: 0,
                amount_paid: 0,
                amount_due: 0,
                amount_partial: 0,
            };
        },

        count(item) {
            this.stats.count_total ++;
            this.stats.count_paid += item.amount_due ? 0 : 1;
            this.stats.count_due += item.amount_due ? 1 : 0;
            this.stats.count_partial += (item.amount_due && item.amount_paid) ? 1 : 0;

            this.stats.amount_total += item.amount_total;
            this.stats.amount_paid += item.amount_paid;
            this.stats.amount_due += item.amount_due;
            this.stats.amount_partial += item.amount_due;
        },

        change(selected) {
            this.current = selected;

            this.reset();
            this.load(selected);
        },

        filterDate(selected, item) {
            if (!selected.value) {
                return this.count(item);
            }

            const date = new Date();

            date.setDate(-selected.value);

            if (new Date(item.date_at) >= date) {
                this.count(item);
            }
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
        this.load({});
    },
}
