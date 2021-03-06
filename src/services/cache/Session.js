'use strict';

import cache from '@/store/cache';

export default {
    enabled() {
        try {
            sessionStorage.setItem('session-storage-test', Math.random());
            sessionStorage.removeItem('session-storage-test');
        } catch (e) {
            return false
        }

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

    clear(value) {
        return new Promise((resolve) => {
            sessionStorage.clear();

            return resolve(value);
        });
    },

    tag(tag) {
        return 'cache-' + process.env.VUE_APP_CACHE_VERSION + '-' + tag;
    },

    checkVersion() {
        if (!this.enabled()) {
            return;
        }

        return cache.dispatch('version').then(({ data }) => {
            const local = process.env.VUE_APP_CACHE_VERSION;
            const server = String(data);

            if (this.checkVersionLocal(local) && this.checkVersionServer(server)) {
                return;
            }

            sessionStorage.clear();
            sessionStorage.setItem('version-local', local);
            sessionStorage.setItem('version-server', server);
        });
    },

    checkVersionLocal(version) {
        return sessionStorage.getItem('version-local') === version;
    },

    checkVersionServer(version) {
        return sessionStorage.getItem('version-server') === version;
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
