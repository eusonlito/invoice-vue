'use strict';

export default {
    enabled() {
        try {
            sessionStorage.setItem('session-storage-test', Math.random());
            sessionStorage.removeItem('session-storage-test');
        } catch (e) {
            return false
        }

        this.version();

        return true;
    },

    item(tag) {
        let item = sessionStorage.getItem(this.tag(tag));

        if (item) {
            return JSON.parse(item);
        }
    },

    get(tag, payload) {
        return new Promise((resolve, reject) => {
            let values = this.item(tag);

            if (!values) {
                return reject();
            }

            const key = this.key(payload);

            if (!values[key]) {
                return reject();
            }

            return resolve(values[key]);
        });
    },

    set(tag, payload, value) {
        return new Promise((resolve) => {
            let values = this.item(tag) || {};

            values[this.key(payload)] = value;

            sessionStorage.setItem(this.tag(tag), JSON.stringify(values));

            return resolve(value);
        });
    },

    remove(tag, value) {
        return new Promise((resolve) => {
            sessionStorage.removeItem(this.tag(tag));

            return resolve(value);
        });
    },

    clear() {
        sessionStorage.clear();
    },

    tag(tag) {
        return 'cache-' + process.env.VUE_APP_CACHE_VERSION + '-' + tag;
    },

    version() {
        if (sessionStorage.getItem('version') === process.env.VUE_APP_CACHE_VERSION) {
            return;
        }

        sessionStorage.clear();
        sessionStorage.setItem('version', process.env.VUE_APP_CACHE_VERSION);
    },

    key(value) {
        const s = JSON.stringify(value);
        let i = 0, h = 0;

        for (i = 0, h = 0xdeadbeef; i < s.length; i++) {
            h = Math.imul(h ^ s.charCodeAt(i), 2654435761);
        }

        return '_' + ((h ^ h >>> 16) >>> 0);
    }
}
