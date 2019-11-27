<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" :buttons="breadcrumb.buttons" />

        <vx-card>
            <vs-table v-if="list && list.length" :data="list" @selected="update" search pagination max-items="20">
                <template slot="thead">
                    <vs-th sort-key="reference">Referencia</vs-th>
                    <vs-th sort-key="name">Nombre</vs-th>
                    <vs-th>Precio</vs-th>
                    <vs-th sort-key="enabled">Activo</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :data="item.id" :key="index" v-for="(item, index) in data" class="whitespace-no-wrap">
                        <vs-td>{{ item.reference }}</vs-td>
                        <vs-td>{{ item.name }}</vs-td>
                        <vs-td>{{ item.price }}</vs-td>
                        <vs-td>
                            <vs-chip :color="item.enabled ? 'success' : 'danger'" class="product-order-status">{{ item.enabled ? 'Sí' : 'No' }}</vs-chip>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>

            <jumbotron v-else-if="list">
                <template slot="title">Aún no has creado ningún producto 🤔</template>

                <template slot="text">
                    Puedes empezar <router-link :to="{ name: 'product-update' }">por aquí</router-link>.
                </template>
            </jumbotron>
        </vx-card>
    </div>
</template>

<script src="./Index.js"></script>
