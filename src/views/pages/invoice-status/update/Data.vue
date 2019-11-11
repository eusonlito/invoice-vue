<template>
    <form method="post" @submit.prevent="submit">
        <vx-card noShadow>
            <div class="mb-3">
                <vs-input type="text" name="name" label="Nombre" v-model="form.name" v-validate="'required'" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('name') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="number" name="order" label="Orden" v-model="form.order" min="0" step="1" v-validate="'required'" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('order') }}</span>
            </div>

            <div class="mb-3 mt-6">
                <vs-checkbox name="paid" v-model="form.paid" class="w-full">Pagada</vs-checkbox>
                <span class="text-danger text-sm">{{ errors.first('paid') }}</span>
            </div>

            <div class="mb-3 mt-6">
                <vs-checkbox name="enabled" v-model="form.enabled" class="w-full">Activo</vs-checkbox>
                <span class="text-danger text-sm">{{ errors.first('enabled') }}</span>
            </div>
        </vx-card>

        <div class="text-right">
            <vs-button button="submit" :disabled="!validate">Guardar</vs-button>
        </div>
    </form>
</template>

<script src="./Data.js"></script>