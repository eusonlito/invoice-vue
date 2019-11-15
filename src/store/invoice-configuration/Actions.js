'use strict';

import request from '@/services/request'

export default {
    list() {
        return request.get('/invoice-configuration');
    },

    design() {
        return request.get('/invoice-configuration/css');
    },

    designPreview(_, payload) {
        return request.post('/invoice-configuration/css/preview', payload, {
            headers: { 'Content-Type': 'application/json' },
            responseType: 'arraybuffer'
        });
    },

    update(_, { payload }) {
        return request.patch('/invoice-configuration', payload);
    },

    updateDesign(_, payload) {
        return request.patch('/invoice-configuration/css', payload);
    }
}
