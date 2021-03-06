'use strict';

import user from '@/store/user';

export default {
    data() {
        return {
            form: {
                name: '',
                user: '',
                password: '',
                password_repeat: '',
                conditions: false
            }
        }
    },

    computed: {
        validate() {
            return !this.errors.any();
        }
    },

    methods: {
        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                return user.dispatch('signup', this.form).then(() => {
                    this.$router.push({ name: 'dashboard-index' })
                }).catch(e => {
                    this.notifyError(e);
                });
            });
        }
    },

    created: () => {
        return user.dispatch('logout');
    }
}
