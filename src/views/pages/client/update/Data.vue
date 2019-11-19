<template>
    <form method="post" @submit.prevent="submit">
        <div class="vx-row match-height">
            <div class="vx-col w-full sm:w-1/3 md:w-1/3 mb-base">
                <vx-card title="Datos de Cliente" noShadow>
                    <div class="mb-3">
                        <vs-input type="text" name="name" label="Nombre" v-model="form.name" v-validate="'required'" data-vv-as="Nombre" data-vv-validate-on="blur" />
                        <span class="text-danger text-sm">{{ errors.first('name') }}</span>
                    </div>

                    <div class="mb-3">
                        <vs-input type="text" name="phone" label="Teléfono" v-model="form.phone" />
                        <span class="text-danger text-sm">{{ errors.first('phone') }}</span>
                    </div>

                    <div class="mb-3">
                        <vs-input type="email" name="email" label="Correo electrónico" v-model="form.email" v-validate="'email'" data-vv-as="Correo electrónico" data-vv-validate-on="blur" />
                        <span class="text-danger text-sm">{{ errors.first('email') }}</span>
                    </div>

                    <div class="mb-3">
                        <vs-input type="text" name="web" label="Web" v-model="form.web" />
                        <span class="text-danger text-sm">{{ errors.first('web') }}</span>
                    </div>

                    <div class="mb-3">
                        <vs-input type="text" name="tax_number" label="CIF/NIF" v-model="form.tax_number" v-validate="'required'" data-vv-as="CIF/NIF" data-vv-validate-on="blur" />
                        <span class="text-danger text-sm">{{ errors.first('tax_number') }}</span>
                    </div>

                    <div class="mb-3 mt-6">
                        <vs-textarea name="comment" label="Comentarios" v-model="form.comment" rows="3" class="w-full"></vs-textarea>
                        <span class="text-danger text-sm">{{ errors.first('comment') }}</span>
                    </div>
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-1/3 md:w-1/3 mb-base">
                <vx-card title="Datos de Contacto" noShadow>
                    <div class="mb-3">
                        <vs-input type="text" name="contact_name" label="Nombre" v-model="form.contact_name" />
                        <span class="text-danger text-sm">{{ errors.first('contact_name') }}</span>
                    </div>

                    <div class="mb-3">
                        <vs-input type="text" name="contact_surname" label="Apellidos" v-model="form.contact_surname" />
                        <span class="text-danger text-sm">{{ errors.first('contact_surname') }}</span>
                    </div>

                    <div class="mb-3">
                        <vs-input type="text" name="contact_phone" label="Teléfono" v-model="form.contact_phone" />
                        <span class="text-danger text-sm">{{ errors.first('contact_phone') }}</span>
                    </div>

                    <div class="mb-3">
                        <vs-input type="email" name="contact_email" label="Correo electrónico" v-model="form.contact_email" v-validate="'email'" data-vv-as="Correo electrónico" data-vv-validate-on="blur" />
                        <span class="text-danger text-sm">{{ errors.first('contact_email') }}</span>
                    </div>
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-1/3 md:w-1/3 mb-base">
                <vx-card title="Preferencias" noShadow>
                    <div class="mb-3" v-if="discount.length">
                        <custom-select v-model="form.discount_id" name="discount_id" label="Descuento" empty="Sin preferencia" :options="discount" option-value="id" option-title="name" :selected="form.discount_id" />
                        <span class="text-danger text-sm">{{ errors.first('discount_id') }}</span>
                    </div>

                    <div class="mb-3" v-if="payment.length">
                        <custom-select v-model="form.payment_id" name="payment_id" label="Forma de pago" empty="Sin preferencia" :options="payment" option-value="id" option-title="name" :selected="form.payment_id" />
                        <span class="text-danger text-sm">{{ errors.first('payment_id') }}</span>
                    </div>

                    <div class="mb-3" v-if="shipping.length">
                        <custom-select v-model="form.shipping_id" name="shipping_id" label="Método de envío" empty="Sin preferencia" :options="shipping" option-value="id" option-title="name" :selected="form.shipping_id" />
                        <span class="text-danger text-sm">{{ errors.first('shipping_id') }}</span>
                    </div>

                    <div class="mb-3" v-if="tax.length">
                        <custom-select v-model="form.tax_id" name="tax_id" label="IVA" empty="Sin preferencia" :options="tax" option-value="id" option-title="name" :selected="form.tax_id" />
                        <span class="text-danger text-sm">{{ errors.first('tax_id') }}</span>
                    </div>
                </vx-card>
            </div>
        </div>

        <div class="text-right">
            <vs-button v-if="id" @click="deleteConfirm()" color="danger" type="flat" class="mr-10">Borrar</vs-button>
            <vs-button button="submit" :disabled="!validate">Guardar</vs-button>
        </div>
    </form>
</template>

<script src="./Data.js"></script>