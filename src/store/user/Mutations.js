'use strict';

import cacheLocal from '@/services/cache/Local';
import cacheSession from '@/services/cache/Session';
import company from '@/store/company';
import jwt from '@/services/jwt';

export default {
    LOAD(state) {
        this.commit('REFRESH');

        if (state.user === 'object') {
            return state.user;
        }

        state.user = cacheLocal.get('user');

        this.commit('TOKEN');

        return state.user;
    },

    UPDATE(state, payload) {
        if (!state.user) {
            state.user = {};
        }

        if (!payload) {
            payload = {};
        }

        state.user = { ...state.user, ...payload };

        cacheLocal.set('user', state.user);

        this.commit('TOKEN');

        return state.user;
    },

    REFRESH(state) {
        if (this.interval) {
            return;
        }

        this.interval = setInterval(() => {
            if (state.user) {
                this.dispatch('detail').catch(() => {});
            }
        }, 60000);
    },

    TOKEN(state) {
        jwt.header(state.user ? state.user.token : null);
    },

    LOGOUT(state) {
        state.user = null;

        cacheLocal.clear();
        cacheSession.clear();

        this.commit('TOKEN');
        company.commit('LOGOUT');
    }
}
