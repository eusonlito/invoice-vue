'use strict';

import cache from '@/services/cache/Local'

export default {
    LOAD(state) {
        this.commit('REFRESH');

        if (state.company === 'object') {
            return;
        }

        return state.company = cache.get('company');
    },

    UPDATE(state, payload) {
        if (!state.company) {
            state.company = {};
        }

        if (!payload) {
            payload = {};
        }

        state.company = { ...state.company, ...payload };

        cache.set('company', state.company);

        return state.company;
    },

    REFRESH(state) {
        if (state.interval) {
            return;
        }

        state.interval = setInterval(() => {
            if (state.company) {
                this.dispatch('detail').catch(() => {});
            }
        }, 60000);
    },

    LOGOUT(state) {
        state.company = null;
    }
}
