'use strict';

import product from '@/store/product';

export default {
    data() {
        return {
            list: null,

            breadcrumb: {
                items: [
                    {
                        title: 'Productos',
                        url: 'product-index'
                    }
                ],

                buttons: [
                    {
                        title: 'Añadir',
                        url: 'product-update'
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
            product.dispatch('list').then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        export() {
            return product.dispatch('export').then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        update(selected) {
            this.$router.push({ name: 'product-update', params: { id: selected } });
        }
    },

    created() {
        this.load();
    }
}
