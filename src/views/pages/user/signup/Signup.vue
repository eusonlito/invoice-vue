<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/register.jpg" alt="Crea una cuenta" class="mx-auto">
                        </div>

                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <form method="post" @submit.prevent="submit">
                                    <div class="vx-card__title mb-8">
                                        <h4 class="mb-4">Crea una cuenta</h4>

                                        <p>
                                            Rellena el siguiente formulario para dar de alta una cuenta.
                                            Ten en cuenta que este proceso tendrá que ser validado por email.
                                        </p>
                                    </div>

                                    <div class="mb-3">
                                        <vs-input type="email" name="user" label-placeholder="Correo electrónico" v-model="form.user" v-validate="'required|email'" data-vv-as="Correo electrónico" icon="icon icon-user" icon-no-border icon-pack="feather" data-vv-validate-on="blur" />
                                        <span class="text-danger text-sm">{{ errors.first('user') }}</span>
                                    </div>

                                    <div class="vx-row mb-8">
                                        <div class="vx-col sm:w-1/2 w-full">
                                            <vs-input type="password" name="password" label-placeholder="Contraseña" v-model="form.password" v-validate="'required|min:6'" data-vv-as="Contraseña" icon="icon icon-lock" icon-no-border icon-pack="feather" data-vv-validate-on="blur" />
                                            <span class="text-danger text-sm">{{ errors.first('password') }}</span>
                                        </div>

                                        <div class="vx-col sm:w-1/2 w-full">
                                            <vs-input type="password" name="password_repeat" label-placeholder="Repite la contraseña" v-model="form.password_repeat" v-validate="'required|min:6'" data-vv-as="Repetición" icon="icon icon-lock" icon-no-border icon-pack="feather" data-vv-validate-on="blur" />
                                            <span class="text-danger text-sm">{{ errors.first('password_repeat') }}</span>
                                        </div>
                                    </div>

                                    <div class="mb-6">
                                        <vs-input type="text" name="name" label-placeholder="Nombre" v-model="form.name" v-validate="'required'" data-vv-as="Nombre" data-vv-validate-on="blur" />
                                        <span class="text-danger text-sm">{{ errors.first('name') }}</span>
                                    </div>

                                    <div class="mb-6">
                                        <vs-checkbox v-model="form.conditions">Acepto los <router-link :to="{ name: 'info-legal-privacity' }" target="_blank">términos y condiciones de uso</router-link>.</vs-checkbox>
                                    </div>

                                    <div class="flex flex-wrap justify-between flex-col-reverse sm:flex-row">
                                        <vs-button type="border" :to="{ name: 'user-auth' }">Volver al acceso</vs-button>
                                        <vs-button button="submit" :disabled="!validate">Finalizar Registro</vs-button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script src="./Signup.js"></script>
