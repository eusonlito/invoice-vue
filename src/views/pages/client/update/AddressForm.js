'use strict';

import address from '@/store/client-address';

export default {
    name: 'update-address-form',

    props: {
        item: Object
    },

    data() {
        return {
            id: this.item.id,

            form: {
                id: this.item.id,
                name: this.item.name,
                address: this.item.address,
                city: this.item.city,
                state: this.item.state,
                postal_code: this.item.postal_code,
                country: this.item.country,
                phone: this.item.phone,
                email: this.item.email,
                comment: this.item.comment,
                tax_number: this.item.tax_number,
                billing: this.item.billing,
                shipping: this.item.shipping,
                enabled: this.item.enabled,
            }
        }
    },

    computed: {
        validate() {
            return !this.errors.any();
        }
    },

    methods: {
        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                return address.dispatch('createOrUpdate', {
                    client_id: this.$route.params.id,
                    id: this.form.id,
                    payload: this.form
                }).then(({ data }) => {
                    this.success(data);
                }).catch(e => {
                    this.notifyError(e);
                })
            });
        },

        success(data) {
            this.notifySuccess('OK :)');
            Object.assign(this.form, data);
        },

        deleteConfirm() {
            this.confirmDanger({
                title: 'Confirmar Borrado',
                text: 'Sólo será posible si no tiene ninguna factura asociada. Recuerda que puedes desactivarlo para evitar salir en los selectores.',
                accept: this.delete
            });
        },

        delete() {
            return address.dispatch('delete', this.form.id).then(() => {
                this.notifySuccess('OK :)');
                this.$emit('addressDeleted');
            }).catch(e => {
                this.notifyError(e);
            });
        },
    }
}