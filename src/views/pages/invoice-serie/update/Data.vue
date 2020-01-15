<template>
    <form method="post" @submit.prevent="submit" enctype="multipart/form-data">
        <vx-card noShadow>
            <div class="mb-3">
                <vs-input type="text" name="name" label="Nombre" v-model="form.name" v-validate="'required'" data-vv-as="Nombre" />
                <span class="text-danger text-sm">{{ errors.first('name') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="text" name="number_prefix" label="Prefijo" v-model="form.number_prefix" min="0" step="1" v-validate="'required'" data-vv-as="Prefijo" />
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

            <div class="vx-row flex-grow">
                <div class="vx-col mb-3">
                    <div class="vs-component vs-con-input-label vs-input vs-input-primary">
                        <label class="vs-input--label">Certificado de firma (FNMT o Camerfirma)</label>

                        <div class="vs-con-input">
                            <input type="file" name="certificate_file" class="vs-inputx vs-input--input normal" @change="file" />
                        </div>
                    </div>
                </div>

                <div class="vx-col flex-1 mb-3">
                    <vs-input type="password" name="certificate_password" label="Contraseña" v-model="form.certificate_password" />
                </div>
            </div>

            <div class="mb-3 mt-3">
                <vs-checkbox name="default" v-model="form.default" class="w-full">Por defecto</vs-checkbox>
                <span class="text-danger text-sm">{{ errors.first('default') }}</span>
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