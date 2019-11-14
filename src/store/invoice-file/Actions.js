'use strict';

import axios from '@/services/axios'

export default {
    main(_, invoice_id) {
        return axios.get('/invoice-file/invoice/' + invoice_id + '/main', {
            headers: { 'Content-Type': 'application/json' },
            responseType: 'arraybuffer'
        });
    },

    download(_, id) {
        return axios.get('/invoice-file/' + id + '/download', {
            headers: { 'Content-Type': 'application/json' },
            responseType: 'arraybuffer'
        });
    },

    detail(_, id) {
        return axios.get('/invoice-file/' + id);
    },

    create(_, { invoice_id, file }) {
        const data = new FormData();

        data.append('file', file);

        return axios.post('/invoice-file/invoice/' + invoice_id, data);
    },

    delete(_, id) {
        return axios.delete('/invoice-file/' + id);
    }
}
