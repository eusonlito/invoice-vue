'use strict';

import serie from '@/store/invoice-serie';

export default {
    name: 'update-css',

    data() {
        return {
            form: {
                css: ''
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
            this.getInvoiceSerieCss();
        },

        getInvoiceSerieCss() {
            return serie.dispatch('css', this.$route.params.id).then(({ data }) => {
                this.form.css = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        preview() {
            return serie.dispatch('cssPreview', { id: this.$route.params.id, payload: this.form }).then(response => {
                return this.downloadBlob(response);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                return serie.dispatch('cssUpdate', { id: this.$route.params.id, payload: this.form }).then(() => {
                    this.notifySuccess('OK :)');
                }).catch(e => {
                    this.notifyError(e);
                })
            });
        }
    },

    created() {
        this.load();
    }
}