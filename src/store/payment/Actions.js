'use strict';

import axios from '@/services/axios'

export default {
    list() {
        return axios.get('/payment');
    },

    enabled() {
        return axios.get('/payment/enabled');
    },

    detail(_, id) {
        return axios.get('/payment/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return axios.patch('/payment/' + id, payload);
        }

        return axios.post('/payment', payload);
    },
}
