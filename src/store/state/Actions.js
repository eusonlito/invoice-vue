'use strict';

import request from '@/services/request'

export default {
    list(_, { country_id }) {
        return request.get('/state/' + country_id);
    },
}
