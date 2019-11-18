'use strict';

import request from '@/services/request'

export default {
    list() {
        return request.get('/tax');
    },

    enabled() {
        return request.get('/tax/enabled');
    },

    detail(_, id) {
        return request.get('/tax/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/tax/' + id, payload);
        }

        return request.post('/tax', payload);
    },

    delete(_, id) {
        return request.delete('/tax/' + id);
    },
}
