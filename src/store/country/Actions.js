'use strict';

import request from '@/services/request'

export default {
    list() {
        return request.get('/country');
    },
}
