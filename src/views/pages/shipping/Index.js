'use strict';

import shipping from '@/store/shipping';

export default {
    data() {
        return {
            list: [],

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
                this.$notify.error(this.$vs, e);
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
