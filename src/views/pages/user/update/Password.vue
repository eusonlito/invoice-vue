<template>
    <vx-card noShadow>
        <form method="post" @submit.prevent="submit">
            <p class="mb-6">Utiliza contraseñas seguras!</p>

            <div class="mb-3">
                <vs-input type="password" name="password" label="Nueva contraseña" v-model="form.password" v-validate="'required|min:6'" data-vv-as="Contraseña" />
                <span class="text-danger text-sm">{{ errors.first('password') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="password" name="password_repeat" label="Repite la nueva contraseña" v-model="form.password_repeat" v-validate="'required|min:6'" data-vv-as="Repetición" />
                <span class="text-danger text-sm">{{ errors.first('password_repeat') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="password" name="password_current" label="Contraseña actual" v-model="form.password_current" v-validate="'required'" data-vv-as="Contraseña actual" />
                <span class="text-danger text-sm">{{ errors.first('password_current') }}</span>
            </div>

            <div class="text-right">
                <vs-button button="submit" :disabled="!validate">Guardar</vs-button>
            </div>
        </form>
    </vx-card>
</template>

<script src="./Password.js"></script>
