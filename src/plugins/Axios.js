'use strict';

import axios from '@/services/axios'
import jwt from '@/services/jwt'

export default {
    install(Vue) {
        Vue.$http = Vue.prototype.$http = axios;
        jwt.install();
    }
}
