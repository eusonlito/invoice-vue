'use strict';

import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

export default {
    install(Vue) {
        if (!process.env.VUE_APP_SENTRY_DSN) {
            return;
        }

        Sentry.init({
          dsn: process.env.VUE_APP_SENTRY_DSN,
          integrations: [new Integrations.Vue({ Vue, attachProps: true })],
        });
    }
}
