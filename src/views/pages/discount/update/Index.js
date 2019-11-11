'use strict';

import updateData from './Data.vue'

export default {
    components: { updateData },

    data() {
        return {
            id: this.$route.params.id,

            breadcrumb: {
                items: [
                    {
                        title: 'Discounts',
                        url: 'discount-index'
                    }
                ]
            }
        }
    }
}
