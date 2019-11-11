<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter justify-center items-center">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-2/5 m-4">
            <vx-card class="mb-base">
                <div class="vx-card__title mb-6">
                    <h2 class="text-center">Roadmap</h2>
                </div>

                <p class="mb-5 text-center">El camino a seguir será (más o menos por prioridad).</p>

                <vs-list class="mb-5">
                    <vs-list-item title="Firma digital integrada para el PDF de factura"></vs-list-item>
                    <vs-list-item title="Personalización del PDF de factura mediante subida de SCSS"></vs-list-item>
                    <vs-list-item title="Logo de empresa para PDF de factura"></vs-list-item>
                </vs-list>

                <p class="text-center">
                    Puedes seguir la evolución del proyecto en
                    <a href="https://github.com/eusonlito/invoice-vue" target="_blank">https://github.com/eusonlito/invoice-vue</a>
                    y <a href="https://github.com/eusonlito/invoice-api" target="_blank">https://github.com/eusonlito/invoice-api</a>
                </p>
            </vx-card>

            <div class="text-center">
                <vs-button size="large" :to="{ name: 'dashboard-index' }">Volver al inicio</vs-button>
            </div>
        </div>
    </div>
</template>
