'use strict';

import request from '@/services/request';

export default {
    list() {
        return request.get('/invoice-serie');
    },

    enabled() {
        return request.get('/invoice-serie/enabled');
    },

    export() {
        return request.get('/invoice-serie/export', { nocache: true });
    },

    detail(_, id) {
        return request.get('/invoice-serie/' + id);
    },

    css(_, id) {
        return request.get('/invoice-serie/' + id + '/css');
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/invoice-serie/' + id, payload);
        }

        return request.post('/invoice-serie', payload);
    },

    cssPreview(_, { id, payload }) {
        return request.post('/invoice-serie/' + id + '/css', payload, {
            headers: { 'Content-Type': 'application/json' },
            responseType: 'arraybuffer'
        });
    },

    cssUpdate(_, { id, payload }) {
        return request.patch('/invoice-serie/' + id + '/css', payload);
    },

    delete(_, id) {
        return request.delete('/invoice-serie/' + id);
    },
}
