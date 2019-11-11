<template>
    <vx-card :title="title" class="mb-base">
        <vue-apex-charts type="line" height="266" :options="chart.options" :series="chart.series"></vue-apex-charts>
    </vx-card>
</template>

<script src="./ChartComparison.js"></script>
