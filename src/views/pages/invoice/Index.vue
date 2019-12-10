<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" :buttons="breadcrumb.buttons" />

        <vs-prompt title="Exportar" :active.sync="export_prompt" @accept="exportAccept" acceptText="Aceptar" cancelText="Cancelar" buttonCancel="flat">
            <div class="con-exemple-prompt">
                <custom-select v-model="export_form.format" name="format" label="Formato" option-value="id" option-title="name" :options="export_form_options.format" class="mb-3" />
                <custom-select v-model="export_form.filter" name="filter" label="Filtros" option-value="id" option-title="name" :options="export_form_options.filter" />
            </div>
        </vs-prompt>

        <stat v-if="total" :list="list"></stat>

        <vx-card v-if="total" :collapse-action="true" subtitle="Filtros" class="mb-base">
            <form method="get" @submit.prevent="submit">
                <div class="vx-row flex-nowrap">
                    <div class="vx-col mb-3">
                        <div class="vs-component vs-con-input-label vs-input vs-input-primary">
                            <label class="vs-input--label">Fecha Inicio</label>
                            <datepicker name="date_start" v-model="form.date_start" ></datepicker>
                        </div>
                    </div>

                    <div class="vx-col mb-3">
                        <div class="vs-component vs-con-input-label vs-input vs-input-primary">
                            <label class="vs-input--label">Fecha Fin</label>
                            <datepicker name="date_end" v-model="form.date_end" ></datepicker>
                        </div>
                    </div>

                    <div v-if="invoice_serie.length" class="vx-col mb-3">
                        <custom-select v-model="form.invoice_serie_id" name="invoice_serie_id" label="Serie" option-value="id" option-title="name" :options="invoice_serie" empty="Todas" />
                    </div>

                    <div v-if="invoice_status.length" class="vx-col mb-3">
                        <custom-select v-model="form.invoice_status_id" name="invoice_status_id" label="Estado" option-value="id" option-title="name" :options="invoice_status" empty="Todos" />
                    </div>

                    <div v-if="invoice_recurring.length" class="vx-col mb-3">
                        <custom-select v-model="form.invoice_recurring_id" name="invoice_recurring_id" label="Recurrente" option-value="id" option-title="name" :options="invoice_recurring" empty="Todas" />
                    </div>

                    <div v-if="payment.length" class="vx-col mb-3">
                        <custom-select v-model="form.payment_id" name="payment_id" label="Pago" option-value="id" option-title="name" :options="payment" empty="Todos" />
                    </div>

                    <div class="vx-col flex-1 text-right whitespace-no-wrap mb-3">
                        <label class="vs-input--label block">&nbsp;</label>

                        <vs-button button="submit" class="mr-5">Filtrar</vs-button>
                        <vs-button button="reset" @click="clean">Limpiar</vs-button>
                    </div>
                </div>
            </form>
        </vx-card>

        <vx-card>
            <vs-table v-if="total" :data="list" @selected="update" search pagination max-items="20">
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

            <jumbotron v-else-if="total !== null && !total">
                <template slot="title">Aún no has creado ninguna factura 🤔</template>

                <template slot="text">
                    Puedes empezar <router-link :to="{ name: 'invoice-update' }">por aquí</router-link>.
                </template>
            </jumbotron>
        </vx-card>
    </div>
</template>

<script src="./Index.js"></script>
