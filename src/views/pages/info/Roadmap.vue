<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter justify-center items-center">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-2/5 m-4">
            <vx-card class="mb-base">
                <div class="vx-card__title mb-6">
                    <h2 class="text-center">Roadmap</h2>
                </div>

                <p class="mb-5 text-center">El camino a seguir será (más o menos por prioridad).</p>

                <vs-list class="mb-5">
                    <vs-list-item title="Generación de fichero compatible con e-Factura para facturación electrónica"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Firma digital integrada para el PDF de factura"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Notificaciones para facturas impagadas"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Notificaciones para facturas recurrentes generadas"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Duplicar factura con diferente serie"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Permitir descarga de facturas según filtros"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Descarga masiva del PDF de cada factura en ZIP"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Descarga de facturas en CSV"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Filtros avanzados para facturas"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Descarga de facturas por lotes"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Facturas recurrentes"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Marcar factura como pagada desde el listado"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Personalización del PDF de factura mediante edición de CSS"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Exportador de todos los contenidos en formato JSON"></vs-list-item>
                    <vs-list-item icon-pack="feather" icon="icon-check" title="Permitir asignar series a facturas"></vs-list-item>
                </vs-list>

                <p class="text-center">
                    Puedes seguir la evolución del proyecto en
                    <a href="https://github.com/eusonlito/invoice-vue" target="_blank">https://github.com/eusonlito/invoice-vue</a>
                    y <a href="https://github.com/eusonlito/invoice-api" target="_blank">https://github.com/eusonlito/invoice-api</a>
                </p>
            </vx-card>

            <div class="text-center">
                <vs-button size="large" :to="{ name: 'dashboard-index' }">Volver</vs-button>
            </div>

            <main-footer />
        </div>
    </div>
</template>
