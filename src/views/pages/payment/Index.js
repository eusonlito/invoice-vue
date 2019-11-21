'use strict';

import payment from '@/store/payment';

export default {
    data() {
        return {
            list: null,

            breadcrumb: {
                items: [
                    {
                        title: 'Pagos',
                        url: 'payment-index'
                    }
                ],

                buttons: [
                    {
                        title: 'Añadir',
                        url: 'payment-update'
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
        load() {
            return payment.dispatch('list').then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        export() {
            return payment.dispatch('export').then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        update(selected) {
            this.$router.push({ name: 'payment-update', params: { id: selected } });
        }
    },

    created() {
        this.load();
    }
}
