'use strict';

export default {
    install(Vue) {
        this.$vs = Vue.prototype.$vs;

        return this;
    },

    info($vs, message) {
        $vs.notify({
            text: message,
            iconPack: 'feather',
            icon: 'icon-check-circle',
            color: 'info'
        })
    },

    success($vs, message) {
        $vs.notify({
            text: message,
            iconPack: 'feather',
            icon: 'icon-check-circle',
            color: 'success'
        })
    },

    error($vs, error) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(error);
        }

        $vs.notify({
            title: 'Error',
            text: this.errorText(error),
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
        })
    },

    errorText(error) {
        if ((error.request.responseType === 'arraybuffer') && error.response.data) {
            error.response.data = JSON.parse(Buffer.from(error.response.data).toString('utf8'));
        }

        if (error.response && error.response.data && error.response.data.message) {
            return error.response.data.message;
        }

        return error.message;
    }
}
