<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" />

        <vx-card>
            <vs-tabs>
                <vs-tab label="Datos">
                    <div class="mt-3">
                        <update-data></update-data>
                    </div>
                </vs-tab>

                <vs-tab label="Direcciones" v-if="id">
                    <div class="mt-3">
                        <update-address></update-address>
                    </div>
                </vs-tab>
            </vs-tabs>
        </vx-card>
    </div>
</template>

<script src="./Index.js"></script>
