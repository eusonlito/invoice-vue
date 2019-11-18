<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" />

        <vx-card>
            <form method="post" @submit.prevent="submit">
                <div class="mb-3">
                    <vs-input type="text" name="name" label="Nombre" v-model="form.name" v-validate="'required'" data-vv-as="Nombre" />
                    <span class="text-danger text-sm">{{ errors.first('name') }}</span>
                </div>

                <div class="mb-3">
                    <vs-input type="text" name="address" label="Dirección" v-model="form.address" v-validate="'required'" data-vv-as="Dirección" />
                    <span class="text-danger text-sm">{{ errors.first('address') }}</span>
                </div>

                <div class="mb-3">
                    <vs-input type="text" name="city" label="Ciudad" v-model="form.city" v-validate="'required'" data-vv-as="Ciudad" />
                    <span class="text-danger text-sm">{{ errors.first('city') }}</span>
                </div>

                <div class="mb-3">
                    <vs-input type="text" name="postal_code" label="Código Postal" v-model="form.postal_code" v-validate="'required'" data-vv-as="Código Postal" />
                    <span class="text-danger text-sm">{{ errors.first('postal_code') }}</span>
                </div>

                <div class="mb-3">
                    <vs-input type="text" name="state" label="Provincia" v-model="form.state" v-validate="'required'" data-vv-as="Provincia" />
                    <span class="text-danger text-sm">{{ errors.first('state') }}</span>
                </div>

                <div class="mb-3">
                    <vs-select v-model="form.country_id" name="country_id" class="w-full select-large" label="País" autocomplete v-validate="'required'" data-vv-as="País">
                        <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item, index) in countries" :selected="item.id === form.country_id" />
                    </vs-select>
                    <span class="text-danger text-sm">{{ errors.first('country_id') }}</span>
                </div>

                <div class="mb-3">
                    <vs-input type="text" name="phone" label="Teléfono" v-model="form.phone" v-validate="'required'" data-vv-as="Teléfono" />
                    <span class="text-danger text-sm">{{ errors.first('phone') }}</span>
                </div>

                <div class="mb-3">
                    <vs-input type="email" name="email" label="Correo Electrónico" v-model="form.email" v-validate="'required|email'" data-vv-as="Correo Electrónico" />
                    <span class="text-danger text-sm">{{ errors.first('email') }}</span>
                </div>

                <div class="mb-3">
                    <vs-input type="text" name="tax_number" label="CIF/NIF" v-model="form.tax_number" v-validate="'required'" data-vv-as="CIF/NIF" />
                    <span class="text-danger text-sm">{{ errors.first('tax_number') }}</span>
                </div>

                <div class="text-right mt-10">
                    <vs-button button="submit" :disabled="!validate">Guardar</vs-button>
                </div>
            </form>
        </vx-card>
    </div>
</template>

<script src="./Update.js"></script>
