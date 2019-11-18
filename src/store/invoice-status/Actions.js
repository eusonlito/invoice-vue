'use strict';

import request from '@/services/request'

export default {
    list() {
        return request.get('/invoice-status');
    },

    enabled() {
        return request.get('/invoice-status/enabled');
    },

    detail(_, id) {
        return request.get('/invoice-status/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/invoice-status/' + id, payload);
        }

        return request.post('/invoice-status', payload);
    },

    delete(_, id) {
        return request.delete('/invoice-status/' + id);
    },
}
