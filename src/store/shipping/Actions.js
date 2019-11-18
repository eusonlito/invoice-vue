'use strict';

import request from '@/services/request'

export default {
    list() {
        return request.get('/shipping');
    },

    enabled() {
        return request.get('/shipping/enabled');
    },

    detail(_, id) {
        return request.get('/shipping/' + id);
    },

    createOrUpdate(_, { id, payload }) {
        if (id) {
            return request.patch('/shipping/' + id, payload);
        }

        return request.post('/shipping', payload);
    },

    delete(_, id) {
        return request.delete('/shipping/' + id);
    },
}
