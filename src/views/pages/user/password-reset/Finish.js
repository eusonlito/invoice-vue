'use strict';

import user from '@/store/user'

export default {
    data() {
        return {
            form: {
                password: '',
                password_repeat: ''
            }
        }
    },

    computed: {
        validate() {
            return !this.errors.any();
        },
    },

    methods: {
        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return;
                }

                return user.dispatch('passwordResetFinish', { hash: this.$route.params.hash, payload: this.form }).then(() => {
                    this.$notify.success(this.$vs, 'Tu contraseña ha sido actualizada :)');
                    this.form.password = this.form.password_repeat = '';
                }).catch(e => {
                    this.$notify.error(this.$vs, e);
                });
            });
        },
    }
}
