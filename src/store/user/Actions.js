'use strict';

import axios from '@/services/axios'

export default {
    auth({ commit }, payload) {
        return axios.post('/user/auth', payload).then(response => {
            return commit('UPDATE', { ...response.data.user, ...{ token: response.data.token }});
        });
    },

    logout({ commit }) {
        if (!this.state.user) {
            return;
        }

        axios.get('/user/auth/logout').catch(() => {});

        return commit('LOGOUT');
    },

    refresh({ commit }) {
        if (!this.state.user) {
            return;
        }

        return axios.get('/user/auth/refresh').then(response => {
            return commit('UPDATE', { token: response.data.token });
        });
    },

    signup({ commit }, payload) {
        return axios.post('/user', payload).then(response => {
            return commit('UPDATE', { ...response.data.user, ...{ token: response.data.token }});
        });
    },

    confirmStart(_, payload) {
        return axios.post('/user/confirm', payload);
    },

    confirmFinish({ commit }, hash) {
        return axios.post('/user/confirm/' + hash).then(response => {
            return commit('UPDATE', response.data);
        });
    },

    passwordResetStart(_, payload) {
        return axios.post('/user/password/reset', payload);
    },

    passwordResetFinish(_, { hash, payload }) {
        return axios.post('/user/password/reset/' + hash, payload);
    },

    updateProfile({ commit }, payload) {
        return axios.patch('/user', payload).then(response => {
            return commit('UPDATE', response.data);
        });
    },

    updatePassword({ commit }, payload) {
        return axios.patch('/user/password', payload).then(response => {
            return commit('UPDATE', response.data);
        });
    },

    detail({ commit }) {
        if (!this.state.user) {
            return;
        }

        return axios.get('/user').then(response => {
            return commit('UPDATE', response.data);
        }).catch(() => {
            return commit('LOGOUT');
        });
    },
}