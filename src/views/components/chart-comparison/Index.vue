<template>
    <vx-card :title="title">
        <div v-if="total" class="flex">
            <div class="mr-6" :key="index" v-for="(serie, index) in chart.series">
                <p class="mb-1 font-semibold">{{ serie.name }}</p>
                <p class="text-3xl" :style="'color: ' + serie.color">{{ serie.total | money }}</p>
            </div>
        </div>

        <vue-apex-charts type="line" height="266" :options="chart.options" :series="chart.series"></vue-apex-charts>
    </vx-card>
</template>

<script src="./Index.js"></script>
