'use strict';

import router from '@/router'
import axios from '@/services/axios'
import user from '@/store/user'

export default {
    refreshing: false,

    install() {
        axios.interceptors.response.use(response => response, error => this.tokenRefresh(error));
    },

    tokenRefresh(error) {
        const { config, response } = error

        if (this.tokenRefreshIsErrorOther(response)) {
            throw error;
        }

        if (response.data.status === 'user_auth') {
            return user.dispatch('logout');
        }

        if (response.data.status === 'token_expired') {
            return this.tokenRefreshRequest(config);
        }

        throw error;
    },

    tokenRefreshIsErrorOther(response) {
        return this.refreshing
            || !user.user
            || !response
            || (response.status !== 401)
            || !response.data
            || !response.data.status;
    },

    tokenRefreshRequest(config) {
        this.refreshing = true;

        return user.dispatch('refresh').then(() => axios(config)).catch(error => {
            this.refreshing = false;

            const { response } = error

            if (response && (response.status === 401)) {
                router.go({ name: 'user-auth' });
            }

            throw error;
        });
    },

    header(token) {
        if (token) {
            token = 'Bearer ' + token;
        }

        axios.defaults.headers.common['Authorization'] = token;
    },
}
