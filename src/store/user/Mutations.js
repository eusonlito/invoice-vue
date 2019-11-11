'use strict';

import company from '@/store/company'
import jwt from '@/services/jwt'

export default {
    LOAD(state) {
        this.commit('REFRESH');

        if (state.user === 'object') {
            return state.user;
        }

        state.user = localStorage.getItem('user');
        state.user = state.user ? JSON.parse(state.user) : null;

        this.commit('TOKEN');

        return state.user;
    },

    UPDATE(state, payload) {
        if (!state.user) {
            state.user = {};
        }

        state.user = {...state.user, ...payload};

        localStorage.setItem('user', JSON.stringify(state.user));

        this.commit('TOKEN');

        return state.user;
    },

    REFRESH(state) {
        if (state.interval) {
            return;
        }

        state.interval = setInterval(() => {
            if (state.user) {
                this.dispatch('detail');
            }
        }, 60000);
    },

    TOKEN(state) {
        jwt.header(state.user ? state.user.token : null);
    },

    LOGOUT(state) {
        localStorage.removeItem('user');

        state.user = null;

        this.commit('TOKEN');

        company.commit('LOGOUT');
    }
}
