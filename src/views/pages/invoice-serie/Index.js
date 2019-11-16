'use strict';

import serie from '@/store/invoice-serie';

export default {
    data() {
        return {
            list: [],

            breadcrumb: {
                items: [
                    {
                        title: 'Series de Facturación',
                        url: 'invoice-serie-index'
                    }
                ],

                buttons: [
                    {
                        title: 'Añadir',
                        url: 'invoice-serie-update'
                    }
                ]
            }
        }
    },

    methods: {
        load() {
            serie.dispatch('list').then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        update(selected) {
            this.$router.push({ name: 'invoice-serie-update', params: { id: selected } });
        }
    },

    created() {
        this.load();
    }
}
