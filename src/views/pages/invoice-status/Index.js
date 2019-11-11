'use strict';

import status from '@/store/invoice-status';

export default {
    data() {
        return {
            list: [],

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
                this.$notify.error(this.$vs, e);
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
