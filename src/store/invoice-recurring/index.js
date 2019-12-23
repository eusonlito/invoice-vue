'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

import actions from './Actions';
import getters from './Getters';
import mutations from './Mutations';
import state from './State';

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    actions: actions,
    getters: getters,
    mutations: mutations,
    state: state,

    strict: process.env.NODE_ENV !== 'production'
});
