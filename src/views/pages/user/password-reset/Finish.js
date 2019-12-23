'use strict';

import user from '@/store/user';

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
                    return this.notifyError(this.errors.all());
                }

                return user.dispatch('passwordResetFinish', { hash: this.$route.params.hash, payload: this.form }).then(() => {
                    this.notifySuccess('Tu contraseña ha sido actualizada :)');
                    this.form.password = this.form.password_repeat = '';
                }).catch(e => {
                    this.notifyError(e);
                });
            });
        },
    }
}
