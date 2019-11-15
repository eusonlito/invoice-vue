'use strict';

import request from '@/services/request'

export default {
    list(_, payload) {
        return request.get('/invoice', { params: payload });
    },

    export() {
        return request.get('/invoice/export');
    },

    preview() {
        return request.get('/invoice/preview');
    },

    detail(_, id) {
        return request.get('/invoice/' + id);
    },

    createWrapper() {
        return request.get('/w/invoice');
    },

    updateWrapper(_, id) {
        return request.get('/w/invoice/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/invoice/' + id, payload);
        }

        return request.post('/invoice', payload);
    }
}
