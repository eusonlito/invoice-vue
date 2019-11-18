<template>
    <div class="content-with-breadcrumb">
        <global-stat v-if="invoice.length" :list="invoice"></global-stat>

        <chart-comparison v-if="invoice.length && revenueComparison.categories.length" :series="revenueComparison.series" :categories="revenueComparison.categories" :total="true"></chart-comparison>
        <chart-comparison v-if="invoice.length && invoicePaid.categories.length" :series="invoicePaid.series" :categories="invoicePaid.categories" :total="true"></chart-comparison>
    </div>
</template>

<script src="./Index.js"></script>
