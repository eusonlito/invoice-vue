'use strict';

import notification from '@/store/notification';

export default {
    name: 'header-notifications',

    inheritAttrs: false,

    computed: {
        unread() {
            return notification.state.count;
        },

        list() {
            return notification.state.last;
        }
    },

    methods: {
        open() {
            if (!this.list || this.unread) {
                notification.dispatch('last');
            }

            if (this.unread) {
                notification.dispatch('read');
            }
        },

        link(item) {
            switch (item.code) {
                case 'invoice.recurring':
                    return this.$router.push({ name: 'invoice-update', params: { id: item.invoice_id }});
            }
        }
    }
};
