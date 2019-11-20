'use strict';

import request from '@/services/request'

export default {
    list() {
        return request.get('/client');
    },

    enabled() {
        return request.get('/client/enabled');
    },

    export() {
        return request.get('/client/export');
    },

    detail(_, id) {
        return request.get('/client/' + id);
    },

    createWrapper() {
        return request.get('/client/w');
    },

    updateWrapper(_, id) {
        return request.get('/client/w/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/client/' + id, payload);
        }

        return request.post('/client', payload);
    },

    delete(_, id) {
        return request.delete('/client/' + id);
    },
}
