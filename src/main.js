'use strict';

require('dotenv').config({ path: '../.env' });

import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});

import App from './App.vue';

// Plugins
import theme from '@/plugins/Theme';
import jwt from '@/plugins/Jwt';
import notify from '@/plugins/Notify';
import validation from '@/plugins/Validation';

Vue.use(theme);
Vue.use(jwt);
Vue.use(notify);
Vue.use(validation);

// Globally Registered Components
import '@/components.js';

// Vue Router
import router from '@/router';

// Filters
import '@/filters/Filters';

// Mixins
import '@/mixins/Mixins';

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer';

Vue.use(VueHammer);

// PrismJS
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

// Feather font icon
import '@/assets/css/iconfont.css';

// Styles: SCSS
import '@/assets/scss/main.scss';
import '@/assets/scss/vuexy/components/vxInputGroup.scss';

// Tailwind
import '@/assets/css/main.css';

// Custom
import '@/assets/scss/custom.scss';

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
