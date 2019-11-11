'use strict';

import axios from '@/services/axios'

export default {
    list() {
        return axios.get('/tax');
    },

    enabled() {
        return axios.get('/tax/enabled');
    },

    detail(_, id) {
        return axios.get('/tax/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return axios.patch('/tax/' + id, payload);
        }

        return axios.post('/tax', payload);
    },
}
