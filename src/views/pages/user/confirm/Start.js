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
        },
    },

    methods: {
        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                return user.dispatch('confirmStart', this.form).then(() => {
                    this.notifySuccess('Correo enviado, revisa tu bandeja de entrada :)');
                }).catch(e => {
                    this.notifyError(e);
                });
            });
        }
    },

    created() {
        if (!user.state.user) {
            return;
        }

        this.form.user = user.state.user.user;
    }
}
