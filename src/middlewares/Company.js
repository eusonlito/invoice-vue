'use strict';

import company from '@/store/company';

export default function ({ next, router }) {
    if (company.state.company) {
        return next();
    }

    return company.dispatch('detail').then(() => {
        return next();
    }).catch(() => {
        return router.push({ name: 'company-update' }).catch(() => {});
    });
}