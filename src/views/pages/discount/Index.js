'use strict';

import discount from '@/store/discount';

export default {
    data() {
        return {
            list: null,

            breadcrumb: {
                items: [
                    {
                        title: 'Descuentos',
                        url: 'discount-index'
                    }
                ],

                buttons: [
                    {
                        title: 'Añadir',
                        url: 'discount-update'
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
            return discount.dispatch('list').then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        export() {
            return discount.dispatch('export').then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        update(selected) {
            this.$router.push({ name: 'discount-update', params: { id: selected } });
        }
    },

    created() {
        this.load();
    }
}
