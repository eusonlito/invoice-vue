'use strict';

import request from '@/services/request';

export default {
    list(_, client_id) {
        return request.get('/client-address/' + client_id);
    },

    enabled() {
        return request.get('/client-address/enabled');
    },

    createOrUpdate(_, { client_id, id, payload }) {
        if (id) {
            return request.patch('/client-address/' + id, payload);
        }

        return request.post('/client-address/' + client_id, payload);
    },

    delete(_, id) {
        return request.delete('/client-address/' + id);
    },
}
