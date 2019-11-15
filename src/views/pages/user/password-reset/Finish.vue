<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/forgot-password.png" alt="Recupera tu acceso" class="mx-auto">
                        </div>

                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <form method="post" @submit.prevent="submit">
                                    <div class="vx-card__title mb-8">
                                        <h4 class="mb-4">Recupera tu acceso</h4>
                                        <p>Ya sólo queda indicar la nueva contraseña a usar.</p>
                                    </div>

                                    <div class="mb-6">
                                        <vs-input type="password" name="password" label-placeholder="Nueva contraseña" v-model="form.password" v-validate="'required|min:6'" data-vv-as="Contraseña" icon="icon icon-lock" icon-no-border icon-pack="feather" data-vv-validate-on="blur" />
                                        <span class="text-danger text-sm">{{ errors.first('password') }}</span>
                                    </div>

                                    <div class="mb-6">
                                        <vs-input type="password" name="password_repeat" label-placeholder="Repite la contraseña" v-model="form.password_repeat" v-validate="'required|min:6'" data-vv-as="Repetición" icon="icon icon-lock" icon-no-border icon-pack="feather" data-vv-validate-on="blur" />
                                        <span class="text-danger text-sm">{{ errors.first('password_repeat') }}</span>
                                    </div>

                                    <div class="flex flex-wrap justify-between flex-col-reverse sm:flex-row">
                                        <vs-button type="border" :to="{ name: 'user-auth' }">Volver al acceso</vs-button>
                                        <vs-button button="submit" :disabled="!validate">Finalizar</vs-button>
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

<script src="./Finish.js"></script>
