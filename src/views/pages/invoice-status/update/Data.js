'use strict';

import status from '@/store/invoice-status';

export default {
    name: 'update-data',

    data() {
        return {
            form: {
                name: '',
                order: 0,
                paid: false,
                default: false,
                enabled: true,
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
            if (this.$route.params.id) {
                this.detail();
            }
        },

        detail() {
            return status.dispatch('detail', this.$route.params.id).then(({ data }) => {
                Object.assign(this.form, data);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                return status.dispatch('createOrUpdate', { id: this.$route.params.id, payload: this.form }).then(({ data }) => {
                    this.success(data);
                }).catch(e => {
                    this.notifyError(e);
                })
            });
        },

        success(data) {
            this.notifySuccess('OK :)');

            if (!this.$route.params.id) {
                this.$router.push({ name: this.$route.name , params: { id: data.id }});
            }
        }
    },

    created() {
        this.load();
    }
}