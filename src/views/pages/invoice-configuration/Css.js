'use strict';

import configuration from '@/store/invoice-configuration';

export default {
    data() {
        return {
            breadcrumb: {
                items: [
                    {
                        title: 'Diseño de PDF',
                        url: 'invoice-configuration-css'
                    }
                ]
            },

            form: {
                css: '',
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
            return configuration.dispatch('design').then(({ data }) => {
                this.form.css = data;
            }).catch(e => {
                this.$notify.error(this.$vs, e);
            });
        },

        preview() {
            return configuration.dispatch('designPreview', this.form).then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.$notify.error(this.$vs, e);
            });
        },

        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return;
                }

                return configuration.dispatch('updateDesign', this.form).then(() => {
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