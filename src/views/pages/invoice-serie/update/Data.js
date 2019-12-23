'use strict';

import serie from '@/store/invoice-serie';

export default {
    name: 'update-data',

    data() {
        return {
            id: this.$route.params.id,

            form: {
                name: '',
                number_prefix: '',
                number_fill: 0,
                number_next: 0,
                certificate_password: '',
                default: 0,
                enabled: 1,
            },

            data: {
                certificate_file: false
            },

            files: []
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
                Object.assign(this.data, data);
                Object.assign(this.form, data);

                delete this.form.certificate_file;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        file(e) {
            this.files[e.target.name] = [e.target.files[0], e.target.files[0].name];
        },

        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                const params = {
                    id: this.$route.params.id,
                    payload: { ...this.form, ...{ _files: this.files } }
                };

                return serie.dispatch('createOrUpdate', params).then(({ data }) => {
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
            return serie.dispatch('delete', this.$route.params.id).then(() => {
                this.notifySuccess('OK :)');
                this.$router.push({ name: 'invoice-serie-index' });
            }).catch(e => {
                this.notifyError(e);
            });
        },
    },

    created() {
        this.load();
    }
}