'use strict';

import VueApexCharts from 'vue-apexcharts';

export default {
    name: 'chart-comparison',

    components: { VueApexCharts },

    props: {
        title: {
            type: String,
            required: false
        },

        categories: {
            type: Array,
            required: true
        },

        series: {
            type: Array,
            required: true
        },

        total: {
            type: Boolean,
            required: false
        }
    },

    data() {
        return {
            chart: {
                series: [],

                options: {
                    chart: {
                        animations: { enabled: false },

                        toolbar: { show: false },

                        dropShadow: {
                            enabled: true,
                            top: 5,
                            left: 0,
                            blur: 4,
                            opacity: 0.10,
                        },
                    },

                    stroke: {
                        curve: 'smooth',
                        dashArray: 0,
                        width: 3,
                    },

                    grid: {
                        borderColor: '#e7e7e7',
                    },

                    legend: {
                        show: true,
                    },

                    colors: [],

                    markers: {
                        size: 0,
                        hover: {
                            size: 5
                        }
                    },

                    xaxis: {
                        labels: {
                            style: {
                                cssClass: 'text-grey fill-current',
                            }
                        },

                        axisTicks: {
                            show: false,
                        },

                        categories: [],

                        axisBorder: {
                            show: false,
                        },
                    },

                    yaxis: {
                        labels: {
                            style: {
                                cssClass: 'text-grey fill-current',
                            }
                        }
                    },

                    tooltip: {
                        x: { show: false }
                    }
                }
            }
        }
    },

    methods: {
        money(value) {
            return this.$options.filters.money(value);
        }
    },

    created() {
        this.series.forEach(item => {
            this.chart.options.colors.push(item.color = item.color || this.stringToHex(item.name));
        });

        this.chart.options.yaxis.labels.formatter = value => this.money(value);
        this.chart.options.xaxis.categories = this.categories;
        this.chart.series = this.series;
    }
}
