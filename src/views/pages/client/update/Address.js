'use strict';

import address from '@/store/client-address';
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
            return address.dispatch('list', this.$route.params.id).then(({ data }) => {
                this.list = data.map(item => {
                    return {...item, ...{ key: item.id } };
                });
            }).catch(e => {
                this.notifyError(e);
            });
        },

        duplicate() {
            this.list.push({});
        },

        addressDeleted(index) {
            this.$refs.list[index].form = {};
            this.list.splice(index, 1);
        },
    },

    created() {
        this.load();
    }
}