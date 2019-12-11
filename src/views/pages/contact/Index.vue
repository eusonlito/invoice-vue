<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/lock-screen.png" alt="Contacto y Feedback" class="mx-auto">
                        </div>

                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <form method="post" @submit.prevent="submit">
                                    <div class="vx-card__title mb-8">
                                        <h4 class="mb-4">Contacto y Feedback</h4>
                                    </div>

                                    <p class="mb-5">Dime lo que quieres, brother.</p>

                                    <div class="mb-6">
                                        <vs-input type="text" name="name" placeholder="Nombre" v-model="form.name" v-validate="'required'" data-vv-as="Nombre" />
                                        <span class="text-danger text-sm">{{ errors.first('name') }}</span>
                                    </div>

                                    <div class="mb-6">
                                        <vs-input type="email" name="email" placeholder="Correo electrónico" v-model="form.email" v-validate="'required|email'" data-vv-as="Correo electrónico" />
                                        <span class="text-danger text-sm">{{ errors.first('email') }}</span>
                                    </div>

                                    <div class="mb-6">
                                        <vs-textarea name="message" placeholder="Mensaje" v-model="form.message" rows="3" v-validate="'required'" data-vv-as="Mensaje"></vs-textarea>
                                        <span class="text-danger text-sm">{{ errors.first('message') }}</span>
                                    </div>

                                    <div class="flex flex-wrap justify-between flex-col-reverse sm:flex-row">
                                        <vs-button type="border" :to="{ name: 'dashboard-index' }">Volver</vs-button>
                                        <vs-button button="submit" :disabled="!validate">Enviar</vs-button>
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

<script src="./Index.js"></script>
