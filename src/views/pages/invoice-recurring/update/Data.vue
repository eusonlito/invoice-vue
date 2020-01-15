<template>
    <form method="post" @submit.prevent="submit">
        <vx-card noShadow>
            <div class="mb-3">
                <vs-input type="text" name="name" label="Nombre" v-model="form.name" v-validate="'required'" data-vv-as="Nombre" />
                <span class="text-danger text-sm">{{ errors.first('name') }}</span>
            </div>

            <div class="mb-3">
                <custom-select v-model="form.every" name="every" label="Periodo" option-value="id" option-title="name" :options="getEvery" v-validate="'required'" data-vv-as="Periodo" />
                <span class="text-danger text-sm">{{ errors.first('every') }}</span>
            </div>

            <div class="mb-3">
                <vs-checkbox name="enabled" v-model="form.enabled" class="w-full">Activo</vs-checkbox>
                <span class="text-danger text-sm">{{ errors.first('enabled') }}</span>
            </div>
        </vx-card>

        <div class="vx-row flex-grow">
            <div class="vx-col">
                <vs-button v-if="id" @click="deleteConfirm()" color="danger" type="flat" title="Borrar">
                    <i class="feather icon-trash"></i>
                </vs-button>
            </div>

            <div class="vx-col text-right">
                <vs-button button="submit" :disabled="!validate">Guardar</vs-button>
            </div>
        </div>
    </form>
</template>

<script src="./Data.js"></script>