'use strict';

import axios from '@/services/axios'

export default {
    list() {
        return axios.get('/client');
    },

    enabled() {
        return axios.get('/client/enabled');
    },

    export() {
        return axios.get('/client/export');
    },

    detail(_, id) {
        return axios.get('/client/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return axios.patch('/client/' + id, payload);
        }

        return axios.post('/client', payload);
    },

    address(_, id) {
        return axios.get('/client-address/' + id);
    },

    addressEnabled() {
        return axios.get('/client-address/enabled');
    },

    addressUpdate(_, { id, payload }) {
        if (payload.id) {
            return axios.patch('/client-address/' + id + '/' + payload.id, payload);
        }

        return axios.post('/client-address/' + id, payload);
    },
}
