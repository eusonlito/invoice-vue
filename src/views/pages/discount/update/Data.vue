<template>
    <form method="post" @submit.prevent="submit">
        <vx-card noShadow>
            <div class="mb-3">
                <vs-input type="text" name="name" label="Nombre" v-model="form.name" v-validate="'required'" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('name') }}</span>
            </div>

            <div class="mb-3">
                <vs-select v-model="form.type" name="type" class="w-full select-large" label="Tipo">
                    <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item, index) in getType()" :selected="item.id === form.type" />
                </vs-select>
                <span class="text-danger text-sm">{{ errors.first('type') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="number" name="value" label="Valor" v-model="form.value" />
                <span class="text-danger text-sm">{{ errors.first('value') }}</span>
            </div>

            <div class="mb-3 mt-6">
                <vs-checkbox name="enabled" v-model="form.enabled" class="w-full">Activo</vs-checkbox>
                <span class="text-danger text-sm">{{ errors.first('enabled') }}</span>
            </div>

            <div class="mb-3 mt-6">
                <vs-textarea name="description" label="Descripción" v-model="form.description" rows="3" class="w-full"></vs-textarea>
                <span class="text-danger text-sm">{{ errors.first('description') }}</span>
            </div>
        </vx-card>

        <div class="text-right">
            <vs-button button="submit" :disabled="!validate">Guardar</vs-button>
        </div>
    </form>
</template>

<script src="./Data.js"></script>