'use strict';

import client from '@/store/client';

export default {
    name: 'update-data',

    data() {
        return {
            id: this.$route.params.id,

            discount: [],
            payment: [],
            shipping: [],
            tax: [],

            form: {
                name: '',
                phone: '',
                email: '',
                web: '',
                tax_number: '',
                comment: '',

                contact_email: '',
                contact_name: '',
                contact_phone: '',
                contact_surname: '',

                discount_id: null,
                payment_id: null,
                shipping_id: null,
                tax_id: null,
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
            if (this.id) {
                this.getUpdateWrapper(this.id);
            } else {
                this.getCreateWrapper();
            }
        },

        getCreateWrapper() {
            return client.dispatch('createWrapper').then(({ data }) => {
                this.setRelations(data);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        getUpdateWrapper(id) {
            return client.dispatch('updateWrapper', id).then(({ data }) => {
                this.setRelations(data);
                this.setClient(data.client);
            }).catch(e => {
                this.notifyError(e);
            });
        },

        setRelations(data) {
            this.setDiscount(data.discount);
            this.setPayment(data.payment);
            this.setShipping(data.shipping);
            this.setTax(data.tax);
        },

        setClient(data) {
            Object.assign(this.form, data);

            this.form.discount_id = data.discount ? data.discount.id : null;
            this.form.payment_id = data.payment ? data.payment.id : null;
            this.form.shipping_id = data.shipping ? data.shipping.id : null;
            this.form.tax_id = data.tax ? data.tax.id : null;
        },

        setDiscount(data) {
            const selected = data.filter(value => value.default)[0];

            this.discount = data;

            if (selected) {
                this.form.discount_id = selected.id;
            }
        },

        setPayment(data) {
            const selected = data.filter(value => value.default)[0];

            this.payment = data;

            if (selected) {
                this.form.payment_id = selected.id;
            }
        },

        setShipping(data) {
            const selected = data.filter(value => value.default)[0];

            this.shipping = data;

            if (selected) {
                this.form.shipping_id = selected.id;
            }
        },

        setTax(data) {
            const selected = data.filter(value => value.default)[0];

            this.tax = data;

            if (selected) {
                this.form.tax_id = selected.id;
            }
        },

        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                client.dispatch('createOrUpdate', { id: this.id, payload: this.form }).then(({ data }) => {
                    this.success(data);
                }).catch(e => {
                    this.notifyError(e);
                })
            });
        },

        success(data) {
            this.notifySuccess('OK :)');

            if (!this.id) {
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
            return client.dispatch('delete', this.$route.params.id).then(() => {
                this.notifySuccess('OK :)');
                this.$router.push({ name: 'client-index' });
            }).catch(e => {
                this.notifyError(e);
            });
        },
    },

    created() {
        this.load();
    }
}