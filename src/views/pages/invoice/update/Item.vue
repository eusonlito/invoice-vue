<template>
    <tr class="tr-values vs-table--tr hoverFlat">
        <td class="td vs-table--td">
            <input type="hidden" v-model="form.id" />

            <vue-simple-suggest :list="product" v-model="form.reference" display-attribute="reference" value-attribute="reference" :filter-by-query="true" v-on:select="referenceSelected">
                <vs-input type="text" name="reference" v-model="form.reference" />
            </vue-simple-suggest>
        </td>
        <td class="td vs-table--td">
            <vue-simple-suggest :list="product" v-model="form.description" display-attribute="name" value-attribute="name" :filter-by-query="true" v-on:select="descriptionSelected">
                <vs-input type="text" name="description" v-model="form.description" />
            </vue-simple-suggest>
        </td>
        <td class="td vs-table--td">
            <vs-input type="number" name="amount_price" v-model="form.amount_price" min="0" step="0.01" v-on:blur="subtotal" />
        </td>
        <td class="td vs-table--td">
            <vs-input type="number" name="quantity" v-model="form.quantity" min="0" step="0.01" v-on:blur="subtotal" />
        </td>
        <td class="td vs-table--td">
            <vs-input type="number" name="percent_discount" v-model="form.percent_discount" step="1" min="0" max="100" v-on:blur="subtotal" />
        </td>
        <td class="td vs-table--td">
            <vs-input type="number" name="amount_subtotal" v-model="form.amount_subtotal" readonly />
        </td>
        <td class="td vs-table--td whitespace-no-wrap">
            <vs-button radius type="border" icon-pack="feather" icon="icon-plus" class="small" color="success" @click="duplicate"></vs-button>
            <vs-button radius type="border" icon-pack="feather" icon="icon-minus" class="small" color="danger" @click="remove"></vs-button>
        </td>
    </tr>
</template>

<script src="./Item.js"></script>
