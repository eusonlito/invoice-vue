'use strict';

export default {
    install(Vue) {
        this.$vs = Vue.prototype.$vs;

        return this;
    },

    confirmDanger($vs, options) {
        $vs.dialog({ ...{
            type: 'confirm',
            color: 'danger',
            acceptText: 'Aceptar',
            cancelText: 'Cancelar'
        }, ...options });
    },
}
