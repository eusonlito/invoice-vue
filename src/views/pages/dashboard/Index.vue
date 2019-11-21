<template>
    <div class="content-with-breadcrumb">
        <breadcrumb />

        <div v-if="invoice && invoice.length" class="content-with-breadcrumb">
            <global-stat :list="invoice" class="mb-base"></global-stat>

            <chart-comparison-revenue v-if="chartComparisonRevenue.invoices.length && chartComparisonRevenue.series.length" :invoices="chartComparisonRevenue.invoices" :series="chartComparisonRevenue.series" :total="true" class="mb-base"></chart-comparison-revenue>
            <chart-comparison-status v-if="chartComparisonStatus.invoices.length && chartComparisonStatus.series.length" :invoices="chartComparisonStatus.invoices" :series="chartComparisonStatus.series" :total="true"></chart-comparison-status>
        </div>

        <jumbotron v-else-if="invoice" class="vx-card">
            <template slot="title">Aún no has creado ninguna factura 😅</template>

            <template slot="text">
                Puedes empezar dando de alta <router-link :to="{ name: 'client-update' }">un cliente</router-link>,
                y después ya te tendrás posibilidad de añadir facturas.
            </template>
        </jumbotron>
    </div>
</template>

<script src="./Index.js"></script>
