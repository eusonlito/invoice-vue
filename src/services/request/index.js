'use strict';

import axios from '@/services/axios'
import cache from './cache'

export default {
    get(path, payload) {
        if (payload && payload.responseType === 'arraybuffer') {
            return axios.get(path, payload);
        }

        return cache.get(path, payload).catch(() => {
            return axios.get(path, payload).then(data => {
                return cache.set(path, payload, data);
            });
        });
    },

    post(path, payload, config) {
        return axios.post(path, payload, config).then(data => {
            return cache.remove(path, data);
        });
    },

    put(path, payload, config) {
        return axios.put(path, payload, config).then(data => {
            return cache.remove(path, data);
        });
    },

    patch(path, payload, config) {
        return axios.patch(path, payload, config).then(data => {
            return cache.remove(path, data);
        });
    },

    delete(path, payload, config) {
        return axios.delete(path, payload, config).then(data => {
            return cache.remove(path, data);
        });
    }
}
