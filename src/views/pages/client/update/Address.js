'use strict';

import client from '@/store/client';
import updateAddressForm from './AddressForm.vue';

export default {
    name: 'update-address',

    components: { updateAddressForm },

    data() {
        return {
            list: []
        }
    },

    methods: {
        load() {
            this.getClientAddress();
        },

        getClientAddress() {
            return client.dispatch('address', this.$route.params.id).then(({ data }) => {
                this.list = data;
            }).catch(e => {
                this.$notify.error(this.$vs, e);
            });
        },

        duplicate() {
            this.list.push({});
        }
    },

    created() {
        this.load();
    }
}