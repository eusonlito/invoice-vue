'use strict';

import recurring from '@/store/invoice-recurring';

export default {
    name: 'update-data',

    data() {
        return {
            id: this.$route.params.id,

            form: {
                name: '',
                every: '',
                enabled: true,
            }
        }
    },

    computed: {
        validate() {
            return !this.errors.any();
        },

        getEvery() {
            return [
                {
                    id: 'week',
                    name: 'Semanal'
                },

                {
                    id: 'month',
                    name: 'Mensual'
                },

                {
                    id: 'year',
                    name: 'Anual'
                }
            ];
        }
    },

    methods: {
        load() {
            if (this.$route.params.id) {
                this.detail();
            }
        },

        detail() {
            return recurring.dispatch('detail', this.$route.params.id).then(({ data }) => {
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

                return recurring.dispatch('createOrUpdate', { id: this.$route.params.id, payload: this.form }).then(({ data }) => {
                    this.success(data);
                }).catch(e => {
                    this.notifyError(e);
                })
            });
        },

        success(data) {
            this.notifySuccess('OK :)');

            if (!this.$route.params.id) {
                this.$router.push({ name: this.$route.name, params: { id: data.id }});
            }
        },

        deleteConfirm() {
            this.confirmDanger({
                title: 'Confirmar Borrado',
                text: 'Sólo será posible si no tiene ninguna factura asociada. Recuerda que puedes desactivarlo para evitar salir en los selectores.',
                accept: this.delete
            });
        },

        delete() {
            return recurring.dispatch('delete', this.$route.params.id).then(() => {
                this.notifySuccess('OK :)');
                this.$router.push({ name: 'invoice-recurring-index' });
            }).catch(e => {
                this.notifyError(e);
            });
        },
    },

    created() {
        this.load();
    }
}