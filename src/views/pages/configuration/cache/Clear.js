'use strict';

import session from '@/services/cache/Session';

export default {
    created() {
        session.clear().then(() => this.$router.push({ name: 'dashboard-index' }));
    }
}