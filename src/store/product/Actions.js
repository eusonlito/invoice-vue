'use strict';

import axios from '@/services/axios'

export default {
    list() {
        return axios.get('/product');
    },

    enabled() {
        return axios.get('/product/enabled');
    },

    export() {
        return axios.get('/product/export');
    },

    detail(_, id) {
        return axios.get('/product/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return axios.patch('/product/' + id, payload);
        }

        return axios.post('/product', payload);
    },
}
