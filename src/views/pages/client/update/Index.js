'use strict';

import updateData from './Data.vue';
import updateAddress from './Address.vue';

export default {
    components: { updateData, updateAddress },

    data() {
        return {
            id: this.$route.params.id,

            breadcrumb: {
                items: [
                    {
                        title: 'Clientes',
                        url: 'client-index'
                    }
                ]
            }
        }
    }
}
