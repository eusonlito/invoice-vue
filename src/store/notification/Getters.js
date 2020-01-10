'use strict';

export default {
    router: () => ($router, item) => {
        switch (item.code) {
            case 'invoice.recurring':
            case 'invoice.unpaid':
                return $router.push({ name: 'invoice-update', params: { id: item.invoice_id }});
        }
    }
}