<template>
    <div class="content-with-breadcrumb">
        <global-stat v-if="invoice.length" :list="invoice"></global-stat>

        <chart-comparison-revenue v-if="invoice.length && chartComparisonRevenue.invoices.length && chartComparisonRevenue.series.length" :invoices="chartComparisonRevenue.invoices" :series="chartComparisonRevenue.series" :total="true"></chart-comparison-revenue>
        <chart-comparison-status v-if="invoice.length && chartComparisonStatus.invoices.length && chartComparisonStatus.series.length" :invoices="chartComparisonStatus.invoices" :series="chartComparisonStatus.series" :total="true"></chart-comparison-status>
    </div>
</template>

<script src="./Index.js"></script>
