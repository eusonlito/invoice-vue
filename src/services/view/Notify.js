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
        });
    },

    warning($vs, message) {
        $vs.notify({
            text: message,
            iconPack: 'feather',
            icon: 'icon-check-circle',
            color: 'warning'
        });
    },

    success($vs, message) {
        $vs.notify({
            text: message,
            iconPack: 'feather',
            icon: 'icon-check-circle',
            color: 'success'
        });
    },

    error($vs, error) {
        const text = this.errorText(error);

        if (!text) {
            return;
        }

        $vs.notify({
            title: 'Error',
            text: text,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
        });
    },

    errorText(error) {
        if (Array.isArray(error)) {
            return error[0];
        }

        let data = error.response ? error.response.data : null;

        if (!error.response || !data) {
            return error.message;
        }

        if (error.request.responseType === 'arraybuffer') {
            data = JSON.parse(Buffer.from(data).toString('utf8'));
        }

        return data.message ? data.message : error.message;
    }
}
