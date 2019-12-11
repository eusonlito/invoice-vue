<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/reset-password.png" alt="Confirmación de cuenta" class="mx-auto">
                        </div>

                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <form method="post" @submit.prevent="submit">
                                    <div class="vx-card__title mb-8">
                                        <h4 class="mb-4">Confirmación de cuenta</h4>
                                        <p>Te hemos enviado un email con el enlace necesario para activar tu cuenta.</p>
                                    </div>

                                    <div class="mb-6">
                                        <vs-input type="email" name="user" label-placeholder="Correo electrónico" v-model="form.user" v-validate="'required|email'" data-vv-as="Correo electrónico" icon="icon icon-user" icon-no-border icon-pack="feather" />
                                        <span class="text-danger text-sm">{{ errors.first('user') }}</span>
                                    </div>

                                    <div class="text-right">
                                        <vs-button button="submit" :disabled="!validate">Enviar correo de confirmación de nuevo</vs-button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>

            <main-footer />
        </div>
    </div>
</template>

<script src="./Start.js"></script>
