'use strict';

import company from '@/store/company';
import user from '@/store/user';

export default function ({ next }) {
    user.commit('LOAD');
    company.commit('LOAD');

    return next();
}