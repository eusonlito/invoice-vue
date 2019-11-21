'use strict';

import tax from '@/store/tax';

export default {
    data() {
        return {
            list: null,

            breadcrumb: {
                items: [
                    {
                        title: 'Impuestos',
                        url: 'tax-index'
                    }
                ],

                buttons: [
                    {
                        title: 'Añadir',
                        url: 'tax-update'
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
            tax.dispatch('list').then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        export() {
            return tax.dispatch('export').then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        update(selected) {
            this.$router.push({ name: 'tax-update', params: { id: selected } });
        }
    },

    created() {
        this.load();
    }
}
