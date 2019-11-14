'use strict';

import axios from '@/services/axios'

export default {
    list() {
        return axios.get('/invoice-configuration');
    },

    design() {
        return axios.get('/invoice-configuration/css');
    },

    designPreview(_, payload) {
        return axios.post('/invoice-configuration/css/preview', payload, {
            headers: { 'Content-Type': 'application/json' },
            responseType: 'arraybuffer'
        });
    },

    update(_, { payload }) {
        return axios.patch('/invoice-configuration', payload);
    },

    updateDesign(_, payload) {
        return axios.patch('/invoice-configuration/css', payload);
    }
}
