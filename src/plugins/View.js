'use strict';

import notify from '@/services/view/Notify';
import dialog from '@/services/view/Dialog';

export default {
    install(Vue) {
        Vue.$notify = Vue.prototype.$notify = notify.install(Vue);
        Vue.$dialog = Vue.prototype.$dialog = dialog.install(Vue);
    }
}
