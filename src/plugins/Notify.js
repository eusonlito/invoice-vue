'use strict';

import notify from '@/services/notify'

export default {
    install(Vue) {
        Vue.$notify = Vue.prototype.$notify = notify.install(Vue);
    }
}
