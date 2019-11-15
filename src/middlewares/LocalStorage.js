'use strict';

import cache from '@/services/cache/Local'

export default function({ next, router }) {
    if (cache.enabled()) {
        return next();
    }

    return router.push({ name: 'cookie-unavailable' }).catch(() => {});
}
