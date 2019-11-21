'use strict';

import status from '@/store/invoice-status';

export default {
    data() {
        return {
            list: null,

            breadcrumb: {
                items: [
                    {
                        title: 'Estados de Facturación',
                        url: 'invoice-status-index'
                    }
                ],

                buttons: [
                    {
                        title: 'Añadir',
                        url: 'invoice-status-update'
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
            status.dispatch('list').then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        export() {
            return status.dispatch('export').then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        update(selected) {
            this.$router.push({ name: 'invoice-status-update', params: { id: selected } });
        }
    },

    created() {
        this.load();
    }
}
