'use strict';

import request from '@/services/request';

export default {
    auth({ commit }, payload) {
        return request.post('/user/auth', payload).then(({ data }) => {
            return commit('UPDATE', { ...data.user, ...{ token: data.token }});
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

        return request.get('/user/auth/refresh').then(({ data }) => {
            return commit('UPDATE', { token: data.token });
        });
    },

    signup({ commit }, payload) {
        return request.post('/user', payload).then(({ data }) => {
            return commit('UPDATE', { ...data.user, ...{ token: data.token }});
        });
    },

    confirmStart(_, payload) {
        return request.post('/user/confirm', payload);
    },

    confirmFinish({ commit }, hash) {
        return request.post('/user/confirm/' + hash).then(({ data }) => {
            return commit('UPDATE', data);
        });
    },

    passwordResetStart(_, payload) {
        return request.post('/user/password/reset', payload);
    },

    passwordResetFinish(_, { hash, payload }) {
        return request.post('/user/password/reset/' + hash, payload);
    },

    updateProfile({ commit }, payload) {
        return request.patch('/user', payload).then(({ data }) => {
            return commit('UPDATE', data);
        });
    },

    updatePassword({ commit }, payload) {
        return request.patch('/user/password', payload).then(({ data }) => {
            return commit('UPDATE', data);
        });
    },

    detail({ commit }) {
        if (!this.state.user) {
            return;
        }

        return request.get('/user', { nocache: true }).then(({ data }) => {
            return commit('UPDATE', data);
        }).catch(() => {
            return commit('LOGOUT');
        });
    },
}