'use strict';

import cache from '@/services/cache/Session';

export default {
    get(path, payload) {
        return cache.get(this.tag(path), { path, payload });
    },

    set(path, payload, data) {
        return cache.set(this.tag(path), { path, payload }, data);
    },

    remove(path, data) {
        return cache.remove(this.tag(path), data);
    },

    clear(data) {
        return cache.clear(data);
    },

    tag(path) {
        return path.split('/')[1];
    }
}
