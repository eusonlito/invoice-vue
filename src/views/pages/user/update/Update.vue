<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" />

        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
                <vx-card title="Perfil">
                    <form method="post" data-vv-scope="profile" @submit.prevent="submitProfile">
                        <p class="mb-6">Recuerda que el cambio de email implica la necesidad de confirmarlo de nuevo.</p>

                        <div class="mb-6">
                            <vs-input type="text" name="name" label-placeholder="Nombre" v-model="form.profile.name" v-validate="'required'" data-vv-as="Nombre" />
                            <span class="text-danger text-sm">{{ errors.first('profile.name') }}</span>
                        </div>

                        <div class="mb-6">
                            <vs-input type="text" name="user" label-placeholder="Correo electrónico" v-model="form.profile.user" v-validate="'required'" data-vv-as="Correo electrónico" />
                            <span class="text-danger text-sm">{{ errors.first('profile.user') }}</span>
                        </div>

                        <div class="mb-6">
                            <vs-input type="password" name="password_current" label-placeholder="Todos los cambios necesitan validación por contraeña" v-model="form.profile.password_current" v-validate="'required'" data-vv-as="Contraseña actual" icon="icon icon-lock" icon-no-border icon-pack="feather" />
                            <span class="text-danger text-sm">{{ errors.first('profile.password_current') }}</span>
                        </div>

                        <div class="text-right">
                            <vs-button button="submit" :disabled="!validateProfile">Guardar</vs-button>
                        </div>
                    </form>
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
                <vx-card title="Contraseña">
                    <form method="post" data-vv-scope="security" @submit.prevent="submitSecurity">
                        <p class="mb-6">Utiliza contraseñas seguras!</p>

                        <div class="mb-6">
                            <vs-input type="password" name="password" label-placeholder="Nueva contraseña" v-model="form.security.password" v-validate="'required|min:6'" data-vv-as="Contraseña" icon="icon icon-lock" icon-no-border icon-pack="feather" />
                            <span class="text-danger text-sm">{{ errors.first('security.password') }}</span>
                        </div>

                        <div class="mb-6">
                            <vs-input type="password" name="password_repeat" label-placeholder="Repite la nueva contraseña" v-model="form.security.password_repeat" v-validate="'required|min:6'" data-vv-as="Repetición" icon="icon icon-lock" icon-no-border icon-pack="feather" />
                            <span class="text-danger text-sm">{{ errors.first('security.password_repeat') }}</span>
                        </div>

                        <div class="mb-6">
                            <vs-input type="password" name="password_current" label-placeholder="Contraseña actual" v-model="form.security.password_current" v-validate="'required'" data-vv-as="Contraseña actual" icon="icon icon-lock" icon-no-border icon-pack="feather" />
                            <span class="text-danger text-sm">{{ errors.first('security.password_current') }}</span>
                        </div>

                        <div class="text-right">
                            <vs-button button="submit" :disabled="!validateSecurity">Guardar</vs-button>
                        </div>
                    </form>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script src="./Update.js"></script>
