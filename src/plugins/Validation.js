'use strict';

import VeeValidate, { Validator } from 'vee-validate';
import locale from 'vee-validate/dist/locale/es';

export default {
    install(Vue) {
        Validator.localize('es', locale);
        Vue.use(VeeValidate, { locale: 'es' });
    }
}
