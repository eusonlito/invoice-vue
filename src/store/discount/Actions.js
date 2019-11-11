'use strict';

import axios from '@/services/axios'

export default {
    list() {
        return axios.get('/discount');
    },

    enabled() {
        return axios.get('/discount/enabled');
    },

    detail(_, id) {
        return axios.get('/discount/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return axios.patch('/discount/' + id, payload);
        }

        return axios.post('/discount', payload);
    },
}
