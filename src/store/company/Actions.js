'use strict';

import request from '@/services/request'

export default {
    detail({ commit }) {
        return request.get('/company').then(response => {
            return commit('UPDATE', response.data);
        });
    },

    createOrUpdate({ commit }, { id, payload }) {
        let response;

        if (id) {
            response = request.patch('/company', payload);
        } else {
            response = request.post('/company', payload);
        }

        return response.then(response => commit('UPDATE', response.data));
    },
}
