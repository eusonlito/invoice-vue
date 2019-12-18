'use strict';

import user from '@/store/user';

export default {
    data() {
        return {
            form: {
                password_current: '',
                password: '',
                password_repeat: ''
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

                return user.dispatch('updatePassword', this.form).then(() => {
                    this.notifySuccess('OK :)');
                }).catch(e => {
                    this.notifyError(e);
                });
            });
        }
    }
}