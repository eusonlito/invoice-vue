'use strict';

import client from '@/store/client';
import discount from '@/store/discount';
import payment from '@/store/payment';
import shipping from '@/store/shipping';
import tax from '@/store/tax';

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
            this.getDiscounts();
            this.getPayments();
            this.getShippments();
            this.getTaxes();

            if (this.id) {
                this.getClient();
            }
        },

        getDiscounts() {
            return discount.dispatch('list').then(({ data }) => {
                this.discount = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        getPayments() {
            return payment.dispatch('list').then(({ data }) => {
                this.payment = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        getShippments() {
            return shipping.dispatch('list').then(({ data }) => {
                this.shipping = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        getTaxes() {
            return tax.dispatch('list').then(({ data }) => {
                this.tax = data;
            }).catch(e => {
                this.notifyError(e);
            });
        },

        getClient() {
            return client.dispatch('detail', this.id).then(({ data }) => {
                Object.assign(this.form, data);

                this.form.discount_id = data.discount ? data.discount.id : null;
                this.form.payment_id = data.payment ? data.payment.id : null;
                this.form.shipping_id = data.shipping ? data.shipping.id : null;
                this.form.tax_id = data.tax ? data.tax.id : null;
            }).catch(e => {
                this.notifyError(e);
            });
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
                this.$router.push({ name: this.$route.name , params: { id: data.id }});
            }
        }
    },

    created() {
        this.load();
    }
}