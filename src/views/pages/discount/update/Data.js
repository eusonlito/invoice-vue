'use strict';

import discount from '@/store/discount';

export default {
    name: 'update-data',

    data() {
        return {
            form: {
                name: '',
                type: 'percent',
                value: 0,
                description: '',
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
                this.notifyError(e);
            });
        },

        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                return discount.dispatch('createOrUpdate', { id: this.$route.params.id, payload: this.form }).then(({ data }) => {
                    this.success(data);
                }).catch(e => {
                    this.notifyError(e);
                });
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