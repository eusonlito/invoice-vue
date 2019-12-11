'use strict';

import form from '@/store/form';

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
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

                return form.dispatch('contact', this.form).then(() => {
                    this.notifySuccess('OK :)');
                }).catch(e => {
                    this.notifyError(e);
                });
            });
        }
    }
}
