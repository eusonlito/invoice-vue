'use strict';

import company from '@/store/company';
import country from '@/store/country';
import state from '@/store/state';

export default {
    data() {
        return {
            breadcrumb: {
                items: [
                    {
                        title: 'Empresa',
                        url: 'company-update'
                    }
                ]
            },

            country_id: null,
            state_id: null,
            countries: [],
            states: [],

            form: {
                name: '',
                address: '',
                city: '',
                postal_code: '',
                tax: '',
                phone: '',
                email: '',
                country_id: null,
                state_id: null
            }
        }
    },

    computed: {
        validate() {
            return !this.errors.any();
        }
    },

    methods: {
        getCompany() {
            company.commit('LOAD');

            if (!company.state.company) {
                return;
            }

            const store = company.state.company;

            this.form.name = store.name;
            this.form.address = store.address;
            this.form.city = store.city;
            this.form.postal_code = store.postal_code;
            this.form.tax_number = store.tax_number;
            this.form.phone = store.phone;
            this.form.email = store.email;

            this.country_id = this.form.country_id = store.state.country.id;
            this.state_id = this.form.state_id = store.state.id;
        },

        getCountries() {
            return country.dispatch('list').then(({ data }) => {
                this.countries = data;

                if (this.country_id) {
                    this.form.country_id = this.country_id;
                } else {
                    this.form.country_id = this.countries[0].id;
                }
            });
        },

        getStates() {
            if (!this.form.country_id) {
                return [];
            }

            return state.dispatch('list', { country_id: this.form.country_id }).then(({ data }) => {
                this.states = data;

                if (this.state_id && (this.country_id === this.form.country_id)) {
                    this.form.state_id = this.state_id;
                } else {
                    this.form.state_id = this.states[0].id;
                }
            });
        },

        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                return company.dispatch('update', this.form).then(() => {
                    this.notifySuccess('OK :)');
                }).catch(e => {
                    this.notifyError(e);
                });
            });
        }
    },

    created() {
        this.getCompany();
        this.getCountries().then(() => this.getStates());
    }
}