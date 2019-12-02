<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" :buttons="breadcrumb.buttons" />

        <stat v-if="list && list.length" :list="list"></stat>

        <vx-card>
            <vs-table v-if="list && list.length" :data="list" @selected="update" search pagination max-items="20">
                <template slot="thead">
                    <vs-th sort-key="number">Número</vs-th>
                    <vs-th>Serie</vs-th>
                    <vs-th>Estado</vs-th>
                    <vs-th sort-key="billing_name">Cliente</vs-th>
                    <vs-th sort-key="amount_total">Importe</vs-th>
                    <vs-th sort-key="date_at" class="text-center">Fecha</vs-th>
                    <vs-th sort-key="paid_at" class="text-center">Fecha Pago</vs-th>
                    <vs-th></vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :data-id="item.id" :data="item.id" :key="index" v-for="(item, index) in data">
                        <vs-td class="whitespace-no-wrap">{{ item.number }}</vs-td>
                        <vs-td class="whitespace-no-wrap">{{ item.serie ? item.serie.name : '-' }}</vs-td>
                        <vs-td class="whitespace-no-wrap">{{ item.status.name }}</vs-td>
                        <vs-td class="whitespace-no-wrap">{{ item.billing_name }}</vs-td>

                        <vs-td>
                            {{ money(item.amount_total) }}
                            <span v-if="item.amount_due && item.amount_paid"> / {{ money(item.amount_paid) }}</span>
                            <vs-progress :percent="percent(item.amount_total, item.amount_paid)" :color="color(item.amount_total, item.amount_paid)"></vs-progress>
                        </vs-td>

                        <vs-td class="whitespace-no-wrap text-center">{{ item.date_at }}</vs-td>
                        <vs-td class="whitespace-no-wrap text-center">{{ item.paid_at }}</vs-td>
                        <vs-td class="whitespace-no-wrap text-center">
                            <i class="feather icon-file vs-table-icon mr-3 text-primary" title="Descargar Factura" @click.stop="download(item)"></i>
                            <i class="feather icon-check-circle vs-table-icon text-success" :class="item.status.paid ? 'disabled' : ''" title="Marcar como Pagada" @click.stop="paid(item)"></i>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>

            <jumbotron v-else-if="list">
                <template slot="title">Aún no has creado ninguna factura 🤔</template>

                <template slot="text">
                    Puedes empezar <router-link :to="{ name: 'invoice-update' }">por aquí</router-link>.
                </template>
            </jumbotron>
        </vx-card>
    </div>
</template>

<script src="./Index.js"></script>
