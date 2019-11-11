'use strict';

export default {
    toggleContentOverlay({ commit }) {
        commit('TOGGLE_CONTENT_OVERLAY')
    },

    updateUserInfo({ commit }, payload) {
        commit('UPDATE_USER_INFO', payload)
    },
}
