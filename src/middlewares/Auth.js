'use strict';

import user from '@/store/user';

export default function ({ next, router }) {
    if (!user.state.user) {
        return router.push({ name: 'user-auth' });
    }

    if (!user.state.user.confirmed_at) {
        return router.push({ name: 'user-confirm-start' });
    }

    return next();
}