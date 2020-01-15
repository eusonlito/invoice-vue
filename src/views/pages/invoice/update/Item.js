'use strict';

export default {
    name: 'update-item',

    props: {
        itemAdded: Function,

        product: Array,

        item: {
            id: Number,
            reference: String,
            description: String,
            quantity: Number,
            percent_discount: Number,
            amount_price: Number,
            amount_subtotal: Number,
        }
    },

    data() {
        return {
            form: {
                id: this.item.id,
                reference: this.item.reference,
                description: this.item.description,
                quantity: this.item.quantity,
                percent_discount: this.item.percent_discount,
                amount_discount: this.item.amount_discount,
                amount_price: this.item.amount_price,
                amount_subtotal: this.item.amount_subtotal,
            }
        }
    },

    methods: {
        referenceSelected(product) {
            this.form.reference = product.reference;

            if (!this.form.description) {
                this.form.description = product.name;
            }

            if (!this.parseFloat(this.form.amount_price)) {
                this.form.amount_price = product.price;
            }

            if (!this.parseFloat(this.form.quantity)) {
                this.form.quantity = 1;
            }

            this.subtotal();
        },

        descriptionSelected(product) {
            this.form.description = '';
            this.referenceSelected(product);
        },

        duplicate() {
            this.$emit('itemAdded');
        },

        remove() {
            this.$emit('itemDeleted');
        },

        update() {
            this.$emit('itemUpdated', this.form.amount_subtotal);
        },

        subtotal() {
            const amount_price = this.parseFloat(this.form.amount_price || 0);
            const quantity = this.parseFloat(this.form.quantity || 0);
            const percent_discount = parseInt(this.form.percent_discount || 0);
            const subtotal = amount_price * quantity;

            this.form.amount_price = this.float(amount_price);
            this.form.quantity = this.float(quantity);
            this.form.percent_discount = percent_discount;
            this.form.amount_subtotal = this.float(subtotal - (subtotal * (percent_discount / 100)));
        },

        parseFloat(value) {
            return this.$options.filters.parseFloat(value);
        },

        float(value) {
            return this.$options.filters.float(value);
        }
    },

    watch: {
        ['form.amount_subtotal']() {
            this.update();
        }
    },

    created() {
        this.subtotal();
    }
}
