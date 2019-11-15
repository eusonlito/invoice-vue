'use strict';

import jwt from '@/services/jwt'

export default {
    install() {
        jwt.install();
    }
}
