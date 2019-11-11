'use strict';

export default function({ next, router }) {
    try {
        localStorage.setItem('local-storage-test', Math.random());
        localStorage.removeItem('local-storage-test');
    } catch (e) {
        return router.push({ name: 'cookie-unavailable' }).catch(() => {});
    }

    return next();
}
