'use strict';

export default {
    LOAD(state) {
        this.commit('REFRESH');

        if (state.company === 'object') {
            return;
        }

        state.company = localStorage.getItem('company');
        state.company = state.company ? JSON.parse(state.company) : null;

        return state.company;
    },

    UPDATE(state, payload) {
        if (!state.company) {
            state.company = {};
        }

        state.company = {...state.company, ...payload};

        localStorage.setItem('company', JSON.stringify(state.company))

        return state.company;
    },

    REFRESH(state) {
        if (state.interval) {
            return;
        }

        state.interval = setInterval(() => {
            if (state.company) {
                this.dispatch('detail');
            }
        }, 60000);
    },

    LOGOUT(state) {
        localStorage.removeItem('company');

        state.company = null;
    }
}
