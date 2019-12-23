'use strict';

import request from '@/services/request';

export default {
    list() {
        return request.get('/invoice-recurring');
    },

    enabled() {
        return request.get('/invoice-recurring/enabled');
    },

    export() {
        return request.get('/invoice-recurring/export', { nocache: true });
    },

    detail(_, id) {
        return request.get('/invoice-recurring/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/invoice-recurring/' + id, payload);
        }

        return request.post('/invoice-recurring', payload);
    },

    delete(_, id) {
        return request.delete('/invoice-recurring/' + id);
    },
}
