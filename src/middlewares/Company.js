'use strict';

import axios from '@/services/axios'
import company from '@/store/company';

export default function ({ next, router }) {
    if (company.state.company) {
        return next();
    }

    return axios.get('/company').then(response => {
        return company.commit('UPDATE', response.data);
    }).then(() => {
        return next();
    }).catch(() => {
        return router.push({ name: 'company-update' }).catch(() => {});
    });
}