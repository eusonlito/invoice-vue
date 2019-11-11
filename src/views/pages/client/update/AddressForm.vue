<template>
    <vx-card noShadow>
        <form method="post" @submit.prevent="submit">
            <div class="mb-3">
                <vs-input type="text" name="name" label="Nombre" v-model="form.name" v-validate="'required'" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('name') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="text" name="address" label="Dirección" v-model="form.address" v-validate="'required'" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('address') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="text" name="city" label="Ciudad" v-model="form.city" v-validate="'required'" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('city') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="text" name="state" label="Provincia" v-model="form.state" v-validate="'required'" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('state') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="text" name="postal_code" label="Código Postal" v-model="form.postal_code" v-validate="'required'" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('postal_code') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="text" name="country" label="País" v-model="form.country" v-validate="'required'" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('country') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="text" name="phone" label="Teléfono" v-model="form.phone" />
                <span class="text-danger text-sm">{{ errors.first('phone') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="email" name="email" label="Correo electrónico" v-model="form.email" v-validate="'email'" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('email') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="text" name="tax_number" label="NIF/CIF" v-model="form.tax_number"  />
                <span class="text-danger text-sm">{{ errors.first('tax_number') }}</span>
            </div>

            <div class="mb-3 mt-6">
                <vs-textarea name="comment" label="Comentarios" v-model="form.comment" rows="3" class="w-full"></vs-textarea>
                <span class="text-danger text-sm">{{ errors.first('comment') }}</span>
            </div>

            <div class="mb-3 mt-6">
                <vs-checkbox name="billing" v-model="form.billing" class="w-full">Facturación</vs-checkbox>
                <span class="text-danger text-sm">{{ errors.first('billing') }}</span>
            </div>

            <div class="mb-3 mt-6">
                <vs-checkbox name="shipping" v-model="form.shipping" class="w-full">Envío</vs-checkbox>
                <span class="text-danger text-sm">{{ errors.first('shipping') }}</span>
            </div>

            <div class="mb-3 mt-6">
                <vs-checkbox name="enabled" v-model="form.enabled" class="w-full">Activa</vs-checkbox>
                <span class="text-danger text-sm">{{ errors.first('enabled') }}</span>
            </div>

            <div class="text-right mt-5">
                <vs-button button="submit" :disabled="!validate">Guardar</vs-button>
            </div>
        </form>
    </vx-card>
</template>

<script src="./AddressForm.js"></script>