'use strict';

import axios from '@/services/axios'

export default {
    list() {
        return axios.get('/invoice-status');
    },

    enabled() {
        return axios.get('/invoice-status/enabled');
    },

    detail(_, id) {
        return axios.get('/invoice-status/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return axios.patch('/invoice-status/' + id, payload);
        }

        return axios.post('/invoice-status', payload);
    },
}
