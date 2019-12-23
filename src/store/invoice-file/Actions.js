'use strict';

import request from '@/services/request';

export default {
    main(_, invoice_id) {
        return request.get('/invoice-file/invoice/' + invoice_id + '/main', {
            headers: { 'Content-Type': 'application/json' },
            responseType: 'arraybuffer'
        });
    },

    download(_, id) {
        return request.get('/invoice-file/' + id + '/download', {
            headers: { 'Content-Type': 'application/json' },
            responseType: 'arraybuffer'
        });
    },

    detail(_, id) {
        return request.get('/invoice-file/' + id);
    },

    create(_, { invoice_id, file }) {
        const data = new FormData();

        data.append('file', file);

        return request.post('/invoice-file/invoice/' + invoice_id, data);
    },

    delete(_, id) {
        return request.delete('/invoice-file/' + id);
    }
}
