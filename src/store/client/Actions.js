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

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/client/' + id, payload);
        }

        return request.post('/client', payload);
    },

    address(_, id) {
        return request.get('/client-address/' + id);
    },

    addressEnabled() {
        return request.get('/client-address/enabled');
    },

    addressUpdate(_, { id, payload }) {
        if (payload.id) {
            return request.patch('/client-address/' + id + '/' + payload.id, payload);
        }

        return request.post('/client-address/' + id, payload);
    },
}
