<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" />

        <vx-card>
            <vs-tabs>
                <vs-tab label="Perfil">
                    <div class="mt-3">
                        <update-profile></update-profile>
                    </div>
                </vs-tab>

                <vs-tab label="Contraseña">
                    <div class="mt-3">
                        <update-password></update-password>
                    </div>
                </vs-tab>
            </vs-tabs>
        </vx-card>
    </div>
</template>

<script src="./Index.js"></script>
