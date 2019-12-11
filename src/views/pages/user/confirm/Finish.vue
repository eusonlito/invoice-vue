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
                                        <p v-html="message">Esperando confirmación...</p>
                                    </div>

                                    <div class="text-right">
                                        <vs-button :to="{ name: 'user-auth' }" v-html="button">Volver al acceso</vs-button>
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

<script src="./Finish.js"></script>
