'use strict';

import Vue from 'vue'
import Vuex from 'vuex'

import state from './State'
import getters from './Getters'
import mutations from './Mutations'
import actions from './Actions'

Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,

    strict: process.env.NODE_ENV !== 'production'
})
