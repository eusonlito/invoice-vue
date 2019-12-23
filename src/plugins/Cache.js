'use strict';

import session from '@/services/cache/Session';

export default {
    install() {
        session.checkVersion() && setInterval(() => session.checkVersion(), 60000);
    }
}
