'use strict';

import updateData from './Data.vue';

export default {
    components: { updateData },

    data() {
        return {
            id: this.$route.params.id,

            breadcrumb: {
                items: [
                    {
                        title: 'Impuestos',
                        url: 'tax-index'
                    }
                ]
            }
        }
    }
}
