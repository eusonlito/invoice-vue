'use strict';

import request from '@/services/request';

export default {
    version() {
        return request.get('/cache/version', { nocache: true });
    }
}
