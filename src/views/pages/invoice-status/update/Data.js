'use strict';

import status from '@/store/invoice-status';

export default {
    name: 'update-data',

    data() {
        return {
            id: this.$route.params.id,

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
            return status.dispatch('delete', this.$route.params.id).then(() => {
                this.notifySuccess('OK :)');
                this.$router.push({ name: 'invoice-status-index' });
            }).catch(e => {
                this.notifyError(e);
            });
        },
    },

    created() {
        this.load();
    }
}