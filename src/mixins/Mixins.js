'use strict';

import Vue from 'vue';

Vue.mixin({
    methods: {
        notifySuccess(message) {
            return this.$notify.success(this.$vs, message);
        },

        notifyError(message) {
            return this.$notify.error(this.$vs, message);
        },

        confirmDanger(options) {
            return this.$dialog.confirmDanger(this.$vs, options);
        },

        isMenuGroupSelected(route, list) {
            const name = route.name;
            const slug = route.meta ? route.meta.parent : undefined;

            const check = item => {
                if ((item.url.name === name) || (slug && (item.slug === slug))) {
                    return true;
                } else if (item.submenu && item.submenu.some(check)) {
                    return true;
                }
            };

            return list.some(check);
        },

        downloadBlob(response) {
            const clickHandler = () => {
                setTimeout(() => {
                    window.URL.revokeObjectURL(a.href);
                }, 150);
            };

            let type = '';

            switch (response.headers['content-type']) {
                case 'application/json':
                    type = 'json';
                    break;

                case 'text/html':
                    type = 'html';
                    break;

                default:
                    type = 'binary';
                    break;
            }

            const a = document.createElement('a');

            if (type === 'json') {
                response.data = JSON.stringify(response.data);
            }

            a.href = window.URL.createObjectURL(new Blob([response.data], {
                type: response.headers['content-type']
            }));

            if (type === 'json') {
                a.download = response.config.url.split('/').slice(-2).join('-') + '.json';
            } else if ((type === 'binary') && response.headers['content-disposition']) {
                a.download = response.headers['content-disposition'].match(/filename="?([^"]+)/)[1];
            }

            a.target = '_blank';

            a.addEventListener('click', clickHandler, false);

            a.click();

            return a;
        },

        stringToHex(string) {
            if (string.length === 0) {
                return 0;
            }

            let hash = 0;
            const colors = [
                '#009688', '#e91e63', '#9c27b0', '#4975de', '#3f51b5', '#5677fc', '#03a9f4',
                '#00bcd4', '#cc3e3e', '#d06b13', '#8bc34a', '#afb42b', '#ff9800', '#ff5722',
                '#2e9e3c', '#607d8b', '#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#8e8e23',
                '#cbd806', '#80ff00', '#2c7513', '#179c17', '#16752e', '#00ff80', '#00ffbf',
                '#00ffff', '#00bfff', '#0080ff', '#0040ff', '#0000ff', '#4000ff', '#8000ff',
                '#bf00ff', '#ff00ff', '#ff00bf', '#ff0080', '#ff0040', '#ff0000'
            ];

            for (let i = 0; i < string.length; i++) {
                hash = string.charCodeAt(i) + ((hash << 5) - hash);
                hash = hash & hash;
            }

            return colors[((hash % colors.length) + colors.length) % colors.length];
        }
    }
});