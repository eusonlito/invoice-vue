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

    post(path, payload) {
        return axios.post(path, payload).then(data => {
            return cache.remove(path, data);
        });
    },

    put(path, payload) {
        return axios.put(path, payload).then(data => {
            return cache.remove(path, data);
        });
    },

    patch(path, payload) {
        return axios.patch(path, payload).then(data => {
            return cache.remove(path, data);
        });
    },

    delete(path, payload) {
        return axios.delete(path, payload).then(data => {
            return cache.remove(path, data);
        });
    }
}
