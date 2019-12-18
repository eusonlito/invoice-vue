'use strict';

import updateProfile from './Profile.vue'
import updatePassword from './Password.vue'

export default {
    components: { updateProfile, updatePassword },

    data() {
        return {
            breadcrumb: {
                items: [
                    {
                        title: 'Usuario',
                        url: 'user-update'
                    }
                ]
            }
        }
    }
}
