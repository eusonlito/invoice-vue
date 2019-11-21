'use strict';

import request from '@/services/request'

export default {
    list() {
        return request.get('/payment');
    },

    enabled() {
        return request.get('/payment/enabled');
    },

    export() {
        return request.get('/payment/export', { nocache: true });
    },

    detail(_, id) {
        return request.get('/payment/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/payment/' + id, payload);
        }

        return request.post('/payment', payload);
    },

    delete(_, id) {
        return request.delete('/payment/' + id);
    },
}
