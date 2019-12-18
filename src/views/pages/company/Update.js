'use strict';

import company from '@/store/company';
import country from '@/store/country';

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
            countries: [],

            form: {
                id: null,
                name: '',
                address: '',
                city: '',
                state: '',
                postal_code: '',
                tax: '',
                phone: '',
                email: '',
                country_id: null,
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
            this.getCountries().then(() => this.getCompany());
        },

        getCompany() {
            company.commit('LOAD');

            if (!company.state.company) {
                return;
            }

            const store = company.state.company;

            this.form.id = store.id;
            this.form.name = store.name;
            this.form.address = store.address;
            this.form.city = store.city;
            this.form.state = store.state;
            this.form.postal_code = store.postal_code;
            this.form.tax_number = store.tax_number;
            this.form.phone = store.phone;
            this.form.email = store.email;

            this.country_id = this.form.country_id = store.country.id;
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

        submit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return this.notifyError(this.errors.all());
                }

                return company.dispatch('createOrUpdate', { id: this.form.id, payload: this.form })
                    .then(() => this.notifySuccess('OK :)'))
                    .catch(e => this.notifyError(e));
            });
        }
    },

    created() {
        this.load();
    }
}