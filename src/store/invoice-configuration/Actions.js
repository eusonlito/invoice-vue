'use strict';

import axios from '@/services/axios'

export default {
    list() {
        return axios.get('/invoice-configuration');
    },

    update(_, { payload }) {
        return axios.patch('/invoice-configuration', payload);
    }
}
