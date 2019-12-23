'use strict';

import notification from '@/store/notification';
import user from '@/store/user';

export default {
    install() {
        (function check() {
            if (!user.state.user) {
                return setTimeout(check, 1000);
            }

            notification.dispatch('count');

            setTimeout(check, 30000);
        })();
    }
}
