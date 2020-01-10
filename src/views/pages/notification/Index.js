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
            notification.getters.router(this.$router, item);
        }
    },

    created() {
        this.load();
    }
}
