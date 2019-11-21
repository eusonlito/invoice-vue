'use strict';

import request from '@/services/request'

export default {
    list() {
        return request.get('/discount');
    },

    enabled() {
        return request.get('/discount/enabled');
    },

    export() {
        return request.get('/discount/export', { nocache: true });
    },

    detail(_, id) {
        return request.get('/discount/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/discount/' + id, payload);
        }

        return request.post('/discount', payload);
    },

    delete(_, id) {
        return request.delete('/discount/' + id);
    },
}
