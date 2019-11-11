'use strict';

import configuration from '@/store/invoice-configuration';

export default {
    data() {
        return {
            breadcrumb: {
                items: [
                    {
                        title: 'Configuración',
                        url: 'invoice-configuration-update'
                    }
                ]
            },

            form: {
                number_prefix: '',
                number_fill: '',
                number_next: ''
            }
        }
    },

    computed: {
        validate() {
            return !this.errors.any();
        }
    },

    methods: {
        load() {
            this.list();
        },

        list() {
            return configuration.dispatch('list').then(({ data }) => {
                Object.assign(this.form, data);
            }).catch(e => {
                this.$notify.error(this.$vs, e);
            });
        },

        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return;
                }

                return configuration.dispatch('update', { payload: this.form }).then(() => {
                    this.success();
                }).catch(e => {
                    this.$notify.error(this.$vs, e);
                })
            });
        },

        success() {
            this.$notify.success(this.$vs, 'OK :)');
        }
    },

    created() {
        this.load();
    }
}