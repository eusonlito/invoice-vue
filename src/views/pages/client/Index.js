'use strict';

import client from '@/store/client';

export default {
    data() {
        return {
            list: [],

            breadcrumb: {
                items: [
                    {
                        title: 'Clientes',
                        url: 'client-index'
                    }
                ],

                buttons: [
                    {
                        title: 'Añadir',
                        url: 'client-update'
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
            return client.dispatch('list').then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.$notify.error(this.$vs, e);
            });
        },

        export() {
            return client.dispatch('export').then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.$notify.error(this.$vs, e);
            });
        },

        update(selected) {
            this.$router.push({ name: 'client-update', params: { id: selected } });
        }
    },

    created() {
        this.load();
    }
}
