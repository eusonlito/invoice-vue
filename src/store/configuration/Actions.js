'use strict';

import request from '@/services/request'

export default {
    list() {
        return request.get('/configuration');
    },

    cacheVersion() {
        return request.get('/configuration/cache/version', { nocache: true }).then(({ data }) => {
            return String(data);
        });
    },
}
