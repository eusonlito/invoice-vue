'use strict';

import shipping from '@/store/shipping';

export default {
    data() {
        return {
            list: null,

            breadcrumb: {
                items: [
                    {
                        title: 'Envíos',
                        url: 'shipping-index'
                    }
                ],

                buttons: [
                    {
                        title: 'Añadir',
                        url: 'shipping-update'
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
            shipping.dispatch('list').then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        export() {
            return shipping.dispatch('export').then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        update(selected) {
            this.$router.push({ name: 'shipping-update', params: { id: selected } });
        }
    },

    created() {
        this.load();
    }
}
