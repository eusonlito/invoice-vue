'use strict';

import request from '@/services/request';

export default {
    contact(_, payload) {
        return request.post('/form/contact', payload);
    },
}
