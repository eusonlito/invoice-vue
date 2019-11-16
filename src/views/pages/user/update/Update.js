'use strict';

import user from '@/store/user';

export default {
    data() {
        return {
            breadcrumb: {
                items: [
                    {
                        title: 'Usuario',
                        url: 'user-update'
                    }
                ]
            },

            form: {
                profile: {
                    name: user.state.user.name,
                    user: user.state.user.user,
                    password_current: ''
                },

                security: {
                    password_current: '',
                    password: '',
                    password_repeat: ''
                }
            }
        }
    },

    computed: {
        validateProfile() {
            return !this.errors.any('profile');
        },

        validateSecurity() {
            return !this.errors.any('security');
        }
    },

    methods: {
        submitProfile() {
            this.$validator.validateAll('profile').then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                return user.dispatch('updateProfile', this.form.profile).then(() => {
                    this.notifySuccess('OK :)');
                }).catch(e => {
                    this.notifyError(e);
                });
            });
        },

        submitSecurity() {
            this.$validator.validateAll('security').then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                return user.dispatch('updatePassword', this.form.security).then(() => {
                    this.notifySuccess('OK :)');
                }).catch(e => {
                    this.notifyError(e);
                });
            });
        }
    }
}