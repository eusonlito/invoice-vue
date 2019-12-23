<template>
    <vs-dropdown vs-custom-content vs-trigger-click @focus="open" class="cursor-pointer">
        <feather-icon icon="BellIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" :badge="unread"></feather-icon>

        <vs-dropdown-menu class="notification-dropdown">
            <ul v-if="list && list.length" class="bordered-items">
                <li v-for="(item, index) in list" :key="index" @click.prevent="link(item)" class="flex justify-between px-4 py-4 notification cursor-pointer">
                    <div class="flex items-start">
                        <div class="mx-2">
                            <span class="font-medium block notification-title" :class="'text-' + item.status">{{ item.title }}</span>
                        </div>
                    </div>
                    <small class="mt-1 whitespace-no-wrap">{{ item.created_at }}</small>
                </li>
            </ul>

            <div class="checkout-footer bottom-0 rounded-b-lg text-primary w-full p-2 font-semibold text-center">
                <router-link v-if="list && list.length" :to="{ name: 'notification-index' }" class="block">Ver Todo</router-link>
                <span v-else>Sin Notificaciones</span>
            </div>
        </vs-dropdown-menu>
    </vs-dropdown>
</template>

<script src="./HeaderNotifications.js"></script>
