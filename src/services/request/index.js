'use strict';

import axios from '@/services/axios';
import cache from './cache';

export default {
    get(path, config) {
        if (config && (config.nocache || (config.responseType === 'arraybuffer'))) {
            return axios.get(path, config);
        }

        return cache.get(path, config).catch(() => {
            return axios.get(path, config).then(data => {
                return cache.set(path, config, data);
            });
        });
    },

    post(path, payload, config) {
        return axios.post(path, this.postPayload(payload), config).then(data => {
            return cache.clear(data);
        });
    },

    put(path, payload, config) {
        if (this.postForm(payload, 'put')) {
            return this.post(path, payload, config);
        }

        return axios.put(path, payload, config).then(data => {
            return cache.clear(data);
        });
    },

    patch(path, payload, config) {
        if (this.postForm(payload, 'patch')) {
            return this.post(path, payload, config);
        }

        return axios.patch(path, payload, config).then(data => {
            return cache.clear(data);
        });
    },

    delete(path, payload, config) {
        return axios.delete(path, payload, config).then(data => {
            return cache.clear(data);
        });
    },

    postForm(payload, method) {
        if (!payload || !Object.keys(payload._files || {}).length) {
            return false;
        }

        if (method) {
            payload._method = method;
        }

        return true;
    },

    postPayload(payload) {
        if (!this.postForm(payload)) {
            return payload;
        }

        const form = new FormData();

        Object.entries(payload).forEach(([key, value]) => {
            if (key === '_files') {
                return;
            }

            if ((value === 'true') || (value === true)) {
                form.set(key, 1);
            } else if ((value === 'false') || (value === false)) {
                form.set(key, 0);
            } else {
                form.set(key, value);
            }
        });

        Object.entries(payload._files).forEach(([key, value]) => {
            form.append(key, value[0], value[1]);
        });

        return form;
    }
}
