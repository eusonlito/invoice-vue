'use strict';

import request from '@/services/request';

export default {
    list() {
        return request.get('/notification');
    },

    count({ commit }) {
        return request.get('/notification/count', { nocache: true })
            .then(({ data }) => commit('COUNT', data));
    },

    last({ commit }) {
        return request.get('/notification/last', { nocache: true })
            .then(({ data }) => commit('LAST', data));
    },

    read({ commit }) {
        return request.patch('/notification').then(() => commit('COUNT', 0));
    },
}
