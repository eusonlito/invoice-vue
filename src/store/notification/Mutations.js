'use strict';

import user from '@/store/user';

export default {
    COUNT(state, count) {
        state.count = count;
    },

    LAST(state, last) {
        state.last = last;
    },

    CHECK() {
        if (user.state.user) {
            this.dispatch('count');
        }
    }
}
