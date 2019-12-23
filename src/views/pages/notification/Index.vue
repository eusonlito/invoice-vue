<template>
    <div class="content-with-breadcrumb">
        <breadcrumb :items="breadcrumb.items" :buttons="breadcrumb.buttons" />

        <vx-card>
            <div v-if="list && list.length" class="vs-list notifications-list">
                <div :key="index" v-for="(item, index) in list" @click.prevent="link(item)" :class="'cursor-pointer vs-list--item text-' + item.status">
                    <div class="list-titles">
                        <div class="vs-list--title">{{ item.title }}</div>
                        <div class="vs-list--subtitle">{{ item.created_at }}</div>
                    </div>
                </div>
            </div>

            <jumbotron v-else-if="list">
                <template slot="title">Por ahora no hay ninguna notificación interesante que mostrar 📭</template>
            </jumbotron>
        </vx-card>
    </div>
</template>

<script src="./Index.js"></script>