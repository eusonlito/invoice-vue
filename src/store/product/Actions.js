'use strict';

import request from '@/services/request'

export default {
    list() {
        return request.get('/product');
    },

    enabled() {
        return request.get('/product/enabled');
    },

    export() {
        return request.get('/product/export', { nocache: true });
    },

    detail(_, id) {
        return request.get('/product/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/product/' + id, payload);
        }

        return request.post('/product', payload);
    },

    delete(_, id) {
        return request.delete('/product/' + id);
    },
}
