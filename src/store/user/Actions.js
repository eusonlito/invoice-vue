'use strict';

import request from '@/services/request'

export default {
    auth({ commit }, payload) {
        return request.post('/user/auth', payload).then(response => {
            return commit('UPDATE', { ...response.data.user, ...{ token: response.data.token }});
        });
    },

    logout({ commit }) {
        if (!this.state.user) {
            return;
        }

        return request.get('/user/auth/logout').finally(() => {
            return commit('LOGOUT');
        });
    },

    refresh({ commit }) {
        if (!this.state.user) {
            return;
        }

        return request.get('/user/auth/refresh').then(response => {
            return commit('UPDATE', { token: response.data.token });
        });
    },

    signup({ commit }, payload) {
        return request.post('/user', payload).then(response => {
            return commit('UPDATE', { ...response.data.user, ...{ token: response.data.token }});
        });
    },

    confirmStart(_, payload) {
        return request.post('/user/confirm', payload);
    },

    confirmFinish({ commit }, hash) {
        return request.post('/user/confirm/' + hash).then(response => {
            return commit('UPDATE', response.data);
        });
    },

    passwordResetStart(_, payload) {
        return request.post('/user/password/reset', payload);
    },

    passwordResetFinish(_, { hash, payload }) {
        return request.post('/user/password/reset/' + hash, payload);
    },

    updateProfile({ commit }, payload) {
        return request.patch('/user', payload).then(response => {
            return commit('UPDATE', response.data);
        });
    },

    updatePassword({ commit }, payload) {
        return request.patch('/user/password', payload).then(response => {
            return commit('UPDATE', response.data);
        });
    },

    detail({ commit }) {
        if (!this.state.user) {
            return;
        }

        return request.get('/user').then(response => {
            return commit('UPDATE', response.data);
        }).catch(() => {
            return commit('LOGOUT');
        });
    },
}