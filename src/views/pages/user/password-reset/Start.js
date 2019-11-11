'use strict';

import user from '@/store/user'

export default {
    data() {
        return {
            form: {
                user: ''
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
                    return;
                }

                return user.dispatch('passwordResetStart', this.form).then(() => {
                    this.$notify.success(this.$vs, 'Revisa tu correo para finalizar el proceso (y la bandeja de SPAM, que nunca se sabe)');
                }).catch(e => {
                    this.$notify.error(this.$vs, e);
                });
            });
        }
    }
}
