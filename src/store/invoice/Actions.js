'use strict';

import request from '@/services/request'

export default {
    listWrapper() {
        return request.get('/invoice/w');
    },

    list(_, payload) {
        return request.get('/invoice', { params: payload });
    },

    export() {
        return request.get('/invoice/export', { nocache: true });
    },

    exportFormatFilter(_, { format, filter, payload }) {
        return request.get('/invoice/export/' + format + '/' + filter, {
            responseType: 'arraybuffer',
            params: payload
        });
    },

    detail(_, id) {
        return request.get('/invoice/' + id);
    },

    createWrapper() {
        return request.get('/invoice/w/create');
    },

    updateWrapper(_, id) {
        return request.get('/invoice/w/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/invoice/' + id, payload);
        }

        return request.post('/invoice', payload);
    },

    duplicate(_, { id, payload }) {
        return request.post('/invoice/' + id, payload);
    },

    paid(_, id) {
        return request.patch('/invoice/' + id + '/paid');
    },

    delete(_, id) {
        return request.delete('/invoice/' + id);
    },
}
