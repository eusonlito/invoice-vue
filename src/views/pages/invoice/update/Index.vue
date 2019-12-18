<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" />

        <div v-if="client_address && client_address.length">
            <form method="post" @submit.prevent="submit">
                <div class="vx-row match-height">
                    <div class="vx-col w-full md:w-1/3 mb-base">
                        <vx-card title="Datos de Empresa">
                            <div class="mb-3">
                                <vs-input type="text" name="company_name" placeholder="Nombre" v-model="form.company_name" readonly />
                            </div>

                            <div class="mb-3">
                                <vs-input type="text" name="company_address" placeholder="Dirección" v-model="form.company_address" readonly />
                            </div>

                            <div class="vx-row flex-nowrap">
                                <div class="vx-col mb-3 flex-1">
                                    <vs-input type="text" name="company_postal_code" placeholder="Código Postal" v-model="form.company_postal_code" readonly />
                                </div>

                                <div class="vx-col mb-3">
                                    <vs-input type="text" name="company_city" placeholder="Ciudad" v-model="form.company_city" readonly />
                                </div>
                            </div>

                            <div class="vx-row flex-nowrap">
                                <div class="vx-col mb-3">
                                    <vs-input type="text" name="company_state" placeholder="Provincia" v-model="form.company_state" readonly />
                                </div>

                                <div class="vx-col mb-3">
                                    <vs-input type="text" name="company_country" placeholder="País" v-model="form.company_country" readonly />
                                </div>
                            </div>

                            <div class="mb-3">
                                <vs-input type="text" name="company_tax_number" placeholder="CIF/NIF" v-model="form.company_tax_number" readonly />
                            </div>
                        </vx-card>
                    </div>

                    <div class="vx-col w-full md:w-1/3 mb-base">
                        <vx-card title="Datos de Facturación">
                            <div class="mb-3">
                                <input type="hidden" name="client_id" v-model="form.client_id" />
                                <input type="hidden" name="client_address_billing_id" v-model="form.client_address_billing_id" />

                                <vue-simple-suggest :list="client_address_billing" v-model="form.billing_name" display-attribute="name" value-attribute="name" :filter-by-query="true" v-on:select="clientAddressBillingSelected">
                                    <vs-input type="text" name="billing_name" placeholder="Nombre" v-model="form.billing_name" v-validate="'required'" data-vv-as="Datos de facturación" />
                                </vue-simple-suggest>

                                <span class="text-danger text-sm">{{ errors.first('billing_name') }}</span>
                            </div>

                            <div class="mb-3">
                                <vs-input type="text" name="billing_address" placeholder="Dirección" v-model="form.billing_address" readonly />
                            </div>

                            <div class="vx-row flex-nowrap">
                                <div class="vx-col mb-3 flex-1">
                                    <vs-input type="text" name="billing_postal_code" placeholder="Código Postal" v-model="form.billing_postal_code" readonly />
                                </div>

                                <div class="vx-col mb-3">
                                    <vs-input type="text" name="billing_city" placeholder="Ciudad" v-model="form.billing_city" readonly />
                                </div>
                            </div>

                            <div class="vx-row flex-nowrap">
                                <div class="vx-col mb-3">
                                    <vs-input type="text" name="billing_state" placeholder="Provincia" v-model="form.billing_state" readonly />
                                </div>

                                <div class="vx-col mb-3">
                                    <vs-input type="text" name="billing_country" placeholder="País" v-model="form.billing_country" readonly />
                                </div>
                            </div>

                            <div class="mb-3">
                                <vs-input type="text" name="billing_tax_number" placeholder="CIF/NIF" v-model="form.billing_tax_number" readonly />
                            </div>
                        </vx-card>
                    </div>

                    <div class="vx-col w-full md:w-1/3 mb-base">
                        <vx-card title="Datos de Envío" :remove-action="clientAddressShippingRemove">
                            <div class="mb-3">
                                <input type="hidden" name="client_address_shipping_id" v-model="form.client_address_shipping_id" />

                                <vue-simple-suggest :list="client_address_shipping" v-model="form.shipping_name" display-attribute="name" value-attribute="name" :filter-by-query="true" v-on:select="clientAddressShippingSelected">
                                    <vs-input type="text" name="shipping_name" placeholder="Nombre" v-model="form.shipping_name" />
                                </vue-simple-suggest>

                                <span class="text-danger text-sm">{{ errors.first('shipping_name') }}</span>
                            </div>

                            <div class="mb-3">
                                <vs-input type="text" name="shipping_address" placeholder="Dirección" v-model="form.shipping_address" readonly />
                            </div>

                            <div class="vx-row flex-nowrap">
                                <div class="vx-col mb-3 flex-1">
                                    <vs-input type="text" name="shipping_postal_code" placeholder="Código Postal" v-model="form.shipping_postal_code" readonly />
                                </div>

                                <div class="vx-col mb-3">
                                    <vs-input type="text" name="shipping_city" placeholder="Ciudad" v-model="form.shipping_city" readonly />
                                </div>
                            </div>

                            <div class="vx-row flex-nowrap">
                                <div class="vx-col mb-3">
                                    <vs-input type="text" name="shipping_state" placeholder="Provincia" v-model="form.shipping_state" readonly />
                                </div>

                                <div class="vx-col mb-3">
                                    <vs-input type="text" name="shipping_country" placeholder="País" v-model="form.shipping_country" readonly />
                                </div>
                            </div>
                        </vx-card>
                    </div>
                </div>

                <vx-card class="mb-base">
                    <div class="vx-row flex-nowrap">
                        <div class="vx-col">
                            <custom-select v-model="form.invoice_serie_id" name="invoice_serie_id" label="Serie" v-validate="'required'" data-vv-as="Serie" option-value="id" option-title="name" :options="invoice_serie" />
                            <span class="text-danger text-sm">{{ errors.first('invoice_serie_id') }}</span>
                        </div>

                        <div class="vx-col">
                            <vs-input type="text" name="number" label="Número" v-model="form.number" v-validate="'required'" data-vv-as="Número" />
                            <span class="text-danger text-sm">{{ errors.first('number') }}</span>
                        </div>

                        <div class="vx-col">
                            <div class="vs-component vs-con-input-label vs-input vs-input-primary">
                                <label class="vs-input--label">Fecha</label>
                                <datepicker name="date_at" v-model="form.date_at" required></datepicker>
                            </div>

                            <span class="text-danger text-sm">{{ errors.first('date_at') }}</span>
                        </div>

                        <div class="vx-col">
                            <div class="vs-component vs-con-input-label vs-input vs-input-primary">
                                <label class="vs-input--label">Fecha límite</label>
                                <datepicker name="required_at" v-model="form.required_at"></datepicker>
                            </div>

                            <span class="text-danger text-sm">{{ errors.first('required_at') }}</span>
                        </div>

                        <div class="vx-col">
                            <div class="vs-component vs-con-input-label vs-input vs-input-primary">
                                <label class="vs-input--label">Fecha de cobro</label>
                                <datepicker name="paid_at" v-model="form.paid_at"></datepicker>
                            </div>

                            <span class="text-danger text-sm">{{ errors.first('paid_at') }}</span>
                        </div>

                        <div class="vx-col">
                            <custom-select v-model="form.invoice_recurring_id" name="invoice_recurring_id" label="Recurrencia" option-value="id" option-title="name" :options="invoice_recurring" empty="Sin especificar" />
                            <span class="text-danger text-sm">{{ errors.first('invoice_recurring_id') }}</span>
                        </div>

                        <div class="vx-col">
                            <custom-select v-model="form.invoice_status_id" name="invoice_status_id" label="Estado" option-value="id" option-title="name" :options="invoice_status" />
                            <span class="text-danger text-sm">{{ errors.first('invoice_status_id') }}</span>
                        </div>

                        <div class="vx-col">
                            <custom-select v-model="form.payment_id" name="payment_id" label="Pago" option-value="id" option-title="name" :options="payment" empty="Sin especificar" />
                            <span class="text-danger text-sm">{{ errors.first('payment_id') }}</span>
                        </div>
                    </div>
                </vx-card>

                <vx-card class="mb-base">
                    <table id="invoice-table" class="vs-table vs-table--tbody-table">
                        <thead class="vs-table--thead">
                            <tr>
                                <th class="col">
                                    <div class="vs-table-text">Referencia</div>
                                </th>

                                <th class="col">
                                    <div class="vs-table-text">Descripción</div>
                                </th>

                                <th class="col">
                                    <div class="vs-table-text">Importe</div>
                                </th>

                                <th class="col">
                                    <div class="vs-table-text">Cantidad</div>
                                </th>

                                <th class="col">
                                    <div class="vs-table-text">Descuento (%)</div>
                                </th>

                                <th class="col">
                                    <div class="vs-table-text">Subtotal</div>
                                </th>

                                <th class="col"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <update-item v-for="(item, index) in items" :key="item.key" :item="item" :product="product" v-on:itemAdded="itemAdded(index)" v-on:itemDeleted="itemDeleted(index)" v-on:itemUpdated="itemUpdated" ref="items"></update-item>
                        </tbody>

                        <tfoot class="vs-table--tfoot">
                            <tr>
                                <th colspan="4"></th>
                                <th class="col text-right">Subtotal</th>
                                <th colspan="2" class="col">
                                    <vs-input type="number" name="amount_subtotal" v-model="form.amount_subtotal" readonly />
                                </th>
                            </tr>

                            <tr>
                                <th colspan="4"></th>
                                <th class="col text-right">
                                    <div v-if="discount.length">
                                        <custom-select v-model="form.discount_id" name="discount_id" option-value="id" option-title="name" :options="discount" empty="Sin descuento" />
                                        <span class="text-danger text-sm">{{ errors.first('discount_id') }}</span>
                                    </div>
                                </th>

                                <th colspan="2" class="col">
                                    <vs-input type="number" name="amount_discount" v-model="form.amount_discount" readonly />
                                </th>
                            </tr>

                            <tr>
                                <th colspan="4"></th>
                                <th class="col text-right">
                                    <div v-if="tax.length">
                                        <custom-select v-model="form.tax_id" name="tax_id" option-value="id" option-title="name" :options="tax" empty="Sin impuestos" />
                                        <span class="text-danger text-sm">{{ errors.first('tax_id') }}</span>
                                    </div>
                                </th>

                                <th colspan="2" class="col">
                                    <vs-input type="number" name="amount_tax" v-model="form.amount_tax" readonly />
                                </th>
                            </tr>

                            <tr>
                                <th colspan="4"></th>
                                <th class="col text-right">
                                    <div v-if="shipping.length">
                                        <custom-select v-model="form.shipping_id" name="shipping_id" option-value="id" option-title="name" :options="shipping" empty="Sin envío" />
                                        <span class="text-danger text-sm">{{ errors.first('shipping_id') }}</span>
                                    </div>

                                    <div v-else>
                                        Envío
                                    </div>
                                </th>

                                <th colspan="2" class="col">
                                    <vs-input type="number" name="amount_shipping" v-model="form.amount_shipping" v-on:blur="calculateTotal" step="0.01" />
                                </th>
                            </tr>

                            <tr>
                                <th colspan="4"></th>
                                <th class="col text-right">Total</th>
                                <th colspan="2" class="col">
                                    <vs-input type="number" name="amount_total" v-model="form.amount_total" readonly />
                                </th>
                            </tr>

                            <tr>
                                <th colspan="4"></th>
                                <th class="col text-right">Falta</th>
                                <th colspan="2" class="col">
                                    <vs-input type="number" name="amount_due" v-model="form.amount_due" readonly />
                                </th>
                            </tr>

                            <tr>
                                <th colspan="4"></th>
                                <th class="col text-right">Pagado</th>
                                <th colspan="2" class="col">
                                    <div class="vx-input-group flex">
                                        <div class="vx-input-group-default flex-grow">
                                            <vs-input type="number" name="amount_paid" v-model="form.amount_paid" v-on:blur="setPaid" step="0.01" />
                                        </div>

                                        <div class="vx-input-group-append flex">
                                            <div class="append-text btn-addon">
                                                <vs-button icon-pack="feather" icon="icon-check" v-on:click="setPaid(form.amount_total)"></vs-button>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </vx-card>

                <vx-card class="mb-base">
                    <div class="vx-row flex-nowrap">
                        <div class="vx-col">
                            <vs-textarea name="comment_public" label="Comentarios para Imprimir" v-model="form.comment_public" rows="3" class="w-full"></vs-textarea>
                        </div>

                        <div class="vx-col">
                            <vs-textarea name="comment_private" label="Comentarios privados" v-model="form.comment_private" rows="3" class="w-full"></vs-textarea>
                        </div>
                    </div>
                </vx-card>

                <vx-card v-if="form.id" class="mb-base">
                    <file-upload :files="files" :upload="fileUpload" :remove="fileDelete" :open="fileView"></file-upload>
                </vx-card>

                <vx-card class="mb-base">
                    <div class="vx-row flex-nowrap">
                        <div v-if="id" class="vx-col">
                            <vs-button @click="deleteConfirm()" color="danger" type="flat" title="Borrar" class="mr-5">
                                <i class="feather icon-trash"></i>
                            </vs-button>

                            <vs-button @click="duplicatePrompt()" type="flat" title="Duplicar">
                                <i class="feather icon-copy"></i>
                            </vs-button>
                        </div>

                        <div class="vx-col text-right">
                            <vs-button button="submit" :disabled="!validate || submitButton.disabled">{{ submitButton.text }}</vs-button>
                        </div>
                    </div>
                </vx-card>
            </form>

            <vs-prompt title="Duplicar" :active.sync="duplicate_prompt" @accept="duplicateAccept" acceptText="Duplicar" cancelText="Cancelar" buttonCancel="flat">
                <div class="con-exemple-prompt">
                    <custom-select v-model="duplicate_form.invoice_serie_id" name="invoice_serie_id" label="Serie" option-value="id" option-title="name" :options="invoice_serie" />
                </div>
            </vs-prompt>
        </div>

        <vx-card v-else-if="client_address" class="faq-jumbotron lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
            <h1 class="mb-10 text-center">Aún no tienes ningún cliente 🤷</h1>

            <p class="text-center">
                Puedes empezar dando <router-link :to="{ name: 'client-update' }">uno de alta</router-link>,
                y después ya te tendrás posibilidad de añadir facturas.
            </p>
        </vx-card>
    </div>
</template>

<script src="./Index.js"></script>
<style src="./Index.scss" lang="scss"></style>