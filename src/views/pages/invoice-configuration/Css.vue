<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" :buttons="breadcrumb.buttons" />

        <form method="post" @submit.prevent="submit">
            <vx-card class="mb-base">
                <vs-textarea name="css" label="CSS" v-model="form.css" v-validate="'required'" data-vv-as="CSS" data-vv-validate-on="blur" rows="25" class="w-full"></vs-textarea>

                <p>
                    Puedes validar el contenido en <a href="http://csslint.net/" target="_blank">http://csslint.net/</a>
                    antes de guardarlo. Evita que el validador devuelva ningún error (por los warnings no hay problema).
                    Ten en cuenta que muchas funcionalidades avanzadas pueden no estar soportadas en la generación de PDF.
                    Si deseas recuperar la versión original, puedes hacerlo en <a href="https://github.com/eusonlito/invoice-api/blob/master/resources/views/pdf/pages/invoice/default.css" target="_blank">Github</a>.
                </p>

                <span class="text-danger text-sm">{{ errors.first('css') }}</span>
            </vx-card>

            <vx-card>
                <div class="text-right">
                    <vs-button type="border" @click.stop="preview">Previsualizar</vs-button>
                    <vs-button button="submit" :disabled="!validate">Guardar</vs-button>
                </div>
            </vx-card>
        </form>
    </div>
</template>

<script src="./Css.js"></script>