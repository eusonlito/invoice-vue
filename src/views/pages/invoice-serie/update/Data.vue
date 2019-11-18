<template>
    <form method="post" @submit.prevent="submit">
        <vx-card noShadow>
            <div class="mb-3">
                <vs-input type="text" name="name" label="Nombre" v-model="form.name" v-validate="'required'" data-vv-as="Nombre" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('name') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="text" name="number_prefix" label="Prefijo" v-model="form.number_prefix" min="0" step="1" v-validate="'required'" data-vv-as="Prefijo" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('number_prefix') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="number" name="number_fill" label="Rellenar con ceros" v-model="form.number_fill" min="0" step="1" />
                <span class="text-danger text-sm">{{ errors.first('number_fill') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="number" name="number_next" label="Siguiente" v-model="form.number_next" min="0" step="1" />
                <span class="text-danger text-sm">{{ errors.first('number_next') }}</span>
            </div>

            <div class="mb-3">
                <vs-checkbox name="default" v-model="form.default" class="w-full">Por defecto</vs-checkbox>
                <span class="text-danger text-sm">{{ errors.first('default') }}</span>
            </div>

            <div class="mb-3">
                <vs-checkbox name="enabled" v-model="form.enabled" class="w-full">Activo</vs-checkbox>
                <span class="text-danger text-sm">{{ errors.first('enabled') }}</span>
            </div>
        </vx-card>

        <div class="text-right">
            <vs-button v-if="id" @click="deleteConfirm()" color="danger" type="flat" class="mr-10">Borrar</vs-button>
            <vs-button button="submit" :disabled="!validate">Guardar</vs-button>
        </div>
    </form>
</template>

<script src="./Data.js"></script>