'use strict';

import updateData from './Data.vue'
import updateCss from './Css.vue'

export default {
    components: { updateData, updateCss },

    data() {
        return {
            id: this.$route.params.id,

            breadcrumb: {
                items: [
                    {
                        title: 'Series de Facturación',
                        url: 'invoice-serie-index'
                    }
                ]
            }
        }
    }
}
