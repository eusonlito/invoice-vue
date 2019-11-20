<template>
    <div v-if="invoice && invoice.length" class="content-with-breadcrumb">
        <global-stat :list="invoice" class="mb-base"></global-stat>

        <chart-comparison-revenue v-if="chartComparisonRevenue.invoices.length && chartComparisonRevenue.series.length" :invoices="chartComparisonRevenue.invoices" :series="chartComparisonRevenue.series" :total="true" class="mb-base"></chart-comparison-revenue>
        <chart-comparison-status v-if="chartComparisonStatus.invoices.length && chartComparisonStatus.series.length" :invoices="chartComparisonStatus.invoices" :series="chartComparisonStatus.series" :total="true"></chart-comparison-status>
    </div>

    <vx-card v-else-if="invoice" class="faq-jumbotron lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
        <h1 class="mb-10 text-center">Aún no has creado ninguna factura 😅</h1>

        <p class="text-center">
            Puedes empezar dando de alta <router-link :to="{ name: 'client-update' }">un cliente</router-link>,
            y después ya te tendrás posibilidad de añadir facturas.
        </p>
    </vx-card>
</template>

<script src="./Index.js"></script>
