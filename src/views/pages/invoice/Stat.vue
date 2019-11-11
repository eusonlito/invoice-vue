<template>
    <vx-card class="mb-base">
        <template slot="actions">
            <time-selector-dropdown :options="options" :selected="change" :current="current" />
        </template>

        <div class="vx-row">
            <div class="vx-col w-1/2 mb-3">
                <p>emitidas <strong>{{ stats.count_total }}</strong> facturas por un total de <strong>{{ money(stats.amount_total) }}</strong></p>
                <vs-progress class="block mt-1" :percent="100" color="success"></vs-progress>
            </div>

            <div class="vx-col w-1/2 mb-3">
                <p><strong>{{ stats.count_paid }}</strong> facturas cobradas por un importe de <strong>{{ money(stats.amount_paid) }}</strong></p>
                <vs-progress class="block mt-1" :percent="percent(stats.amount_total, stats.amount_paid)" :color="color(stats.amount_total, stats.amount_paid)"></vs-progress>
            </div>

            <div class="vx-col w-1/2 mb-3">
                <p><strong>{{ stats.count_due }}</strong> facturas pendientes por importe de <strong>{{ money(stats.amount_due) }}</strong></p>
                <vs-progress class="block mt-1" :percent="percent(stats.count_total, stats.count_due)" :color="color(stats.count_total, stats.count_due, true)"></vs-progress>
            </div>

            <div class="vx-col w-1/2 mb-3">
                <p><strong>{{ stats.count_partial }}</strong> facturas parcialmente cobradas</p>
                <vs-progress class="block mt-1" :percent="percent(stats.count_total, stats.count_partial)" :color="color(stats.count_total, stats.count_partial, true)"></vs-progress>
            </div>
        </div>
    </vx-card>
</template>

<script src="./Stat.js"></script>
