'use strict';

import tax from '@/store/tax';

export default {
    data() {
        return {
            list: [],

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

        update(selected) {
            this.$router.push({ name: 'tax-update', params: { id: selected } });
        }
    },

    created() {
        this.load();
    }
}
