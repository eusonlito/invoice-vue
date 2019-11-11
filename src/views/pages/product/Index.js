'use strict';

import product from '@/store/product';

export default {
    data() {
        return {
            list: [],

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
                        title: 'Export',
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
                this.$notify.error(this.$vs, e);
            });
        },

        export() {
            return product.dispatch('export').then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.$notify.error(this.$vs, e);
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
