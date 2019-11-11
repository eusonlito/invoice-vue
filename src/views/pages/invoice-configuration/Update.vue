<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" :buttons="breadcrumb.buttons" />

        <form method="post" @submit.prevent="submit">
            <vx-card class="mb-base">
                <div class="mb-3">
                    <vs-input type="text" name="number_prefix" label="Prefijo" v-model="form.number_prefix" />
                    <span class="text-danger text-sm">{{ errors.first('number_prefix') }}</span>
                </div>

                <div class="mb-3">
                    <vs-input type="number" name="number_fill" label="Relleno de ceros" v-model="form.number_fill" step="1" />
                    <span class="text-danger text-sm">{{ errors.first('number_fill') }}</span>
                </div>

                <div class="mb-3">
                    <vs-input type="number" name="number_next" label="Siguiente número" v-model="form.number_next" step="1" />
                    <span class="text-danger text-sm">{{ errors.first('number_next') }}</span>
                </div>
            </vx-card>

            <vx-card>
                <div class="text-right">
                    <vs-button button="submit" :disabled="!validate">Guardar</vs-button>
                </div>
            </vx-card>
        </form>
    </div>
</template>

<script src="./Update.js"></script>