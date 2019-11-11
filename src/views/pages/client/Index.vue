<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" :buttons="breadcrumb.buttons" />

        <vx-card>
            <vs-table :data="list" @selected="update" search pagination max-items="20">
                <template slot="thead">
                    <vs-th sort-key="name">Nombre</vs-th>
                    <vs-th sort-key="phone">Teléfono</vs-th>
                    <vs-th sort-key="email">Correo electrónico</vs-th>
                    <vs-th sort-key="contact_name">Contacto</vs-th>
                    <vs-th sort-key="created_at">Alta</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :data="item.id" :key="index" v-for="(item, index) in data">
                        <vs-td>{{ item.name }}</vs-td>
                        <vs-td>{{ item.phone }}</vs-td>
                        <vs-td>{{ item.email }}</vs-td>
                        <vs-td>{{ item.contact_name + ' ' + item.contact_surname }}</vs-td>
                        <vs-td>{{ item.created_at | date }}</vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>

<script src="./Index.js"></script>
