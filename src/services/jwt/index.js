'use strict';

import router from '@/router'
import axios from '@/services/axios'
import user from '@/store/user'

export default {
    refreshing: false,

    install() {
        axios.interceptors.response.use(response => response, error => this.error(error));
    },

    error(error) {
        const { config, response } = error

        if (this.notRelatedSessionError(response)) {
            throw error;
        }

        if (this.sessionExpired(response)) {
            return this.logout();
        }

        if (this.tokenExpired(response)) {
            return this.tokenRefreshRequest(config);
        }

        throw error;
    },

    notRelatedSessionError(response) {
        return (response.status !== 401) || !response || !response.data || !response.data.status;
    },

    sessionExpired(response) {
        return response.data.status === 'user_auth';
    },

    tokenExpired(response) {
        return response.data.status === 'token_expired';
    },

    tokenRefreshRequest(config) {
        this.refreshing = true;

        return user.dispatch('refresh').then(() => axios(config)).catch(error => {
            this.refreshing = false;

            const { response } = error

            if (!response || (response.status !== 401)) {
                throw error;
            }

            return this.logout();
        });
    },

    logout() {
        user.commit('LOGOUT');

        return router.go({ name: 'user-auth' });
    },

    header(token) {
        if (token) {
            token = 'Bearer ' + token;
        }

        axios.defaults.headers.common['Authorization'] = token;
    },
}
