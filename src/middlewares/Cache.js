'use strict';

import local from '@/services/cache/Local'
import session from '@/services/cache/Session'

export default function({ next, router }) {
    session.enabled();

    if (local.enabled()) {
        return next();
    }

    return router.push({ name: 'cookie-unavailable' }).catch(() => {});
}
