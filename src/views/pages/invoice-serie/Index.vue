<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" :buttons="breadcrumb.buttons" />

        <vx-card>
            <vs-table v-if="list && list.length" :data="list" @selected="update" search pagination max-items="20">
                <template slot="thead">
                    <vs-th>Nombre</vs-th>
                    <vs-th>Prefijo</vs-th>
                    <vs-th>Siguiente</vs-th>
                    <vs-th>Por defecto</vs-th>
                    <vs-th>Activo</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :data="item.id" :key="index" v-for="(item, index) in data" class="whitespace-no-wrap">
                        <vs-td>{{ item.name }}</vs-td>
                        <vs-td>{{ item.number_prefix }}</vs-td>
                        <vs-td>{{ item.number_next }}</vs-td>
                        <vs-td>
                            <vs-chip :color="item.default ? 'success' : 'danger'" class="product-order-serie">{{ item.default ? 'Sí' : 'No' }}</vs-chip>
                        </vs-td>
                        <vs-td>
                            <vs-chip :color="item.enabled ? 'success' : 'danger'" class="product-order-serie">{{ item.enabled ? 'Sí' : 'No' }}</vs-chip>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>

            <jumbotron v-else-if="list">
                <template slot="title">Aún no has creado ninguna serie 🤔</template>

                <template slot="text">
                    Puedes empezar <router-link :to="{ name: 'invoice-serie-update' }">por aquí</router-link>.
                </template>
            </jumbotron>
        </vx-card>
    </div>
</template>

<script src="./Index.js"></script>
