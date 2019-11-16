'use strict';

import serie from '@/store/invoice-serie';

export default {
    name: 'update-data',

    data() {
        return {
            form: {
                name: '',
                number_prefix: '',
                number_fill: 0,
                number_next: 0,
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
            return serie.dispatch('detail', this.$route.params.id).then(({ data }) => {
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

                return serie.dispatch('createOrUpdate', { id: this.$route.params.id, payload: this.form }).then(({ data }) => {
                    this.success(data);
                }).catch(e => {
                    this.$notify.error(this.$vs, e);
                })
            });
        },

        success(data) {
            this.$notify.success(this.$vs, 'OK :)');

            if (!this.$route.params.id) {
                this.$router.push({ name: this.$route.name , params: { id: data.id }});
            }
        }
    },

    created() {
        this.load();
    }
}