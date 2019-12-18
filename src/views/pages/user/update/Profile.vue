<template>
    <vx-card noShadow>
        <form method="post" @submit.prevent="submit">
            <p class="mb-6">Recuerda que el cambio de correo electrónico necesita ser validado de nuevo desde el correo recibido en la nueva dirección.</p>

            <div class="mb-3">
                <vs-input type="text" name="name" label="Nombre" v-model="form.name" v-validate="'required'" data-vv-as="Nombre" />
                <span class="text-danger text-sm">{{ errors.first('name') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="text" name="user" label="Correo electrónico" v-model="form.user" v-validate="'required'" data-vv-as="Correo electrónico" />
                <span class="text-danger text-sm">{{ errors.first('user') }}</span>
            </div>

            <div class="mb-3">
                <vs-input type="password" name="password_current" label="Todos los cambios necesitan validación por contraeña" v-model="form.password_current" v-validate="'required'" data-vv-as="Contraseña actual" />
                <span class="text-danger text-sm">{{ errors.first('password_current') }}</span>
            </div>

            <div class="text-right">
                <vs-button button="submit" :disabled="!validate">Guardar</vs-button>
            </div>
        </form>
    </vx-card>
</template>

<script src="./Profile.js"></script>
