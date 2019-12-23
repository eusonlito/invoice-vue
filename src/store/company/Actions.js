'use strict';

import request from '@/services/request';

export default {
    detail({ commit }) {
        return request.get('/company', { nocache: true }).then(({ data }) => {
            return commit('UPDATE', data);
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
