'use strict';

import Vuesax from 'vuesax';
import theme from '@/services/theme';

import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css';

export default {
    install(Vue) {
        Vue.use(Vuesax, { theme: { colors: theme.colors } });
    }
}
