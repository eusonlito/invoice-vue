'use strict';

import invoice from '@/store/invoice';
import serie from '@/store/invoice-serie';
import ChartHelper from '@/views/components/chart-comparison/Helper.js';
import ChartComparisonRevenue from '@/views/components/chart-comparison/Revenue.vue';
import ChartComparisonStatus from '@/views/components/chart-comparison/Status.vue';
import GlobalStat from '@/views/pages/invoice/Stat.vue';

export default {
    components: { GlobalStat, ChartComparisonRevenue, ChartComparisonStatus },

    data() {
        return {
            invoice: [],

            chartComparisonRevenue: {
                invoices: [],
                series: []
            },

            chartComparisonStatus: {
                invoices: [],
                series: []
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
                this.invoice = data.map(item => this.item(item));
            }).then(() => {
                return serie.dispatch('list').then(({ data }) => {
                    const list = ChartHelper.prepare(this.invoice);

                    this.setChartComparisonRevenue(data, list);
                    this.setChartComparisonStatus(data, list);
                });
            }).catch(e => {
                this.notifyError(e);
            });
        },

        setChartComparisonRevenue(series, invoices) {
            this.chartComparisonRevenue.invoices = invoices;
            this.chartComparisonRevenue.series = series;
        },

        setChartComparisonStatus(series, invoices) {
            this.chartComparisonStatus.invoices = invoices;
            this.chartComparisonStatus.series = series;
        }
    },

    created() {
        this.load();
    }
}