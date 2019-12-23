'use strict';

require('dotenv').config({ path: '../.env' });

import Vue from 'vue';

// Sentry
import sentry from '@/plugins/Sentry';

Vue.use(sentry);

// Components
import '@/plugins/Components.js';

import theme from '@/plugins/Theme';
import cache from '@/plugins/Cache';
import jwt from '@/plugins/Jwt';
import view from '@/plugins/View';
import validation from '@/plugins/Validation';
import notification from '@/plugins/Notification';

Vue.use(theme);
Vue.use(jwt);
Vue.use(cache);
Vue.use(view);
Vue.use(validation);
Vue.use(notification);

// Router
import router from '@/router';

// Filters
import '@/filters/Filters';

// Mixins
import '@/mixins/Mixins';

// Feather font icon
import '@/assets/css/iconfont.css';

// Styles: SCSS
import '@/assets/scss/main.scss';
import '@/assets/scss/vuexy/components/vxInputGroup.scss';

// Tailwind
import '@/assets/css/main.css';

// Custom
import '@/assets/scss/custom.scss';

Vue.config.productionTip = false

// App
import App from './App.vue';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
