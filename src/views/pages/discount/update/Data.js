'use strict';

import discount from '@/store/discount';

export default {
    name: 'update-data',

    data() {
        return {
            form: {
                name: '',
                type: '',
                value: '',
                description: '',
                enabled: '',
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

        getType() {
            return [
                {
                    id: 'fixed',
                    name: 'Fijo'
                },

                {
                    id: 'percent',
                    name: 'Porcentaje'
                }
            ];
        },

        detail() {
            return discount.dispatch('detail', this.$route.params.id).then(({ data }) => {
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

                return discount.dispatch('createOrUpdate', { id: this.$route.params.id, payload: this.form }).then(({ data }) => {
                    this.success(data);
                }).catch(e => {
                    this.$notify.error(this.$vs, e);
                });
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