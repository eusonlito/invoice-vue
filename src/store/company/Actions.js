'use strict';

import axios from '@/services/axios'

export default {
    detail({ commit }) {
        return axios.get('/company').then(response => {
            return commit('UPDATE', response.data);
        }).catch(() => {});
    },

    update({ commit }, payload) {
        return axios.patch('/company', payload).then(response => {
            return commit('UPDATE', response.data);
        });
    },
}
