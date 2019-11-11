'use strict';

import discount from '@/store/discount';

export default {
    data() {
        return {
            list: [],

            breadcrumb: {
                items: [
                    {
                        title: 'Descuentos',
                        url: 'discount-index'
                    }
                ],

                buttons: [
                    {
                        title: 'Añadir',
                        url: 'discount-update'
                    }
                ]
            }
        }
    },

    methods: {
        load() {
            return discount.dispatch('list').then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.$notify.error(this.$vs, e);
            });
        },

        update(selected) {
            this.$router.push({ name: 'discount-update', params: { id: selected } });
        }
    },

    created() {
        this.load();
    }
}
