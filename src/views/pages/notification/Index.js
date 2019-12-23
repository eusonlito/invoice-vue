'use strict';

import notification from '@/store/notification';

export default {
    data() {
        return {
            list: null,

            breadcrumb: {
                items: [
                    {
                        title: 'Notificaciones',
                        url: 'notification-index'
                    }
                ]
            }
        }
    },

    methods: {
        load() {
            return notification.dispatch('list').then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        link(item) {
            switch (item.code) {
                case 'invoice.recurring':
                    return this.$router.push({ name: 'invoice-update', params: { id: item.invoice_id }});
            }
        }
    },

    created() {
        this.load();
    }
}
