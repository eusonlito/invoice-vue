'use strict';

import local from '@/services/cache/Local'
import session from '@/services/cache/Session'

export default function({ next, router }) {
    if (!local.enabled() || !session.enabled()) {
        return router.push({ name: 'cookie-unavailable' }).catch(() => {});
    }

    session.version();

    return next();
}
