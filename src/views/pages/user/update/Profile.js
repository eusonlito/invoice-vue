'use strict';

import user from '@/store/user';

export default {
    data() {
        return {
            form: {
                name: user.state.user.name,
                user: user.state.user.user,
                password_current: ''
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

                return user.dispatch('updateProfile', this.form).then(() => {
                    this.notifySuccess('OK :)');
                }).catch(e => {
                    this.notifyError(e);
                });
            });
        }
    }
}