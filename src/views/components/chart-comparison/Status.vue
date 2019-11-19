<template>
    <chart-comparison v-if="y.length && x.length" :categories="y" :series="x" :total="true"></chart-comparison>
</template>

<script src="./Status.js"></script>
