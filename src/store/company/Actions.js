'use strict';

import request from '@/services/request'

export default {
    detail({ commit }) {
        return request.get('/company').then(response => {
            return commit('UPDATE', response.data);
        });
    },

    update({ commit }, payload) {
        return request.patch('/company', payload).then(response => {
            return commit('UPDATE', response.data);
        });
    },
}
