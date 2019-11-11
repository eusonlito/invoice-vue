'use strict';

import axios from '@/services/axios'

export default {
    list() {
        return axios.get('/shipping');
    },

    enabled() {
        return axios.get('/shipping/enabled');
    },

    detail(_, id) {
        return axios.get('/shipping/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return axios.patch('/shipping/' + id, payload);
        }

        return axios.post('/shipping', payload);
    },
}
