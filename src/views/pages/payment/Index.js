'use strict';

import payment from '@/store/payment';

export default {
    data() {
        return {
            list: [],

            breadcrumb: {
                items: [
                    {
                        title: 'Pagos',
                        url: 'payment-index'
                    }
                ],

                buttons: [
                    {
                        title: 'Añadir',
                        url: 'payment-update'
                    }
                ]
            }
        }
    },

    methods: {
        load() {
            return payment.dispatch('list').then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.$notify.error(this.$vs, e);
            });
        },

        update(selected) {
            this.$router.push({ name: 'payment-update', params: { id: selected } });
        }
    },

    created() {
        this.load();
    }
}
