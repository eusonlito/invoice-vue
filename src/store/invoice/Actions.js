'use strict';

import axios from '@/services/axios'

export default {
    list(_, payload) {
        return axios.get('/invoice', { params: payload });
    },

    export() {
        return axios.get('/invoice/export');
    },

    detail(_, id) {
        return axios.get('/invoice/' + id);
    },

    createWrapper() {
        return axios.get('/w/invoice');
    },

    updateWrapper(_, id) {
        return axios.get('/w/invoice/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return axios.patch('/invoice/' + id, payload);
        }

        return axios.post('/invoice', payload);
    }
}
