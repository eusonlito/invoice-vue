<template>
    <vs-navbar class="vx-navbar navbar-skelton" color="white">
        <ul class="menu-items flex flex-wrap">
            <li class="menu-item" v-for="(item, index) in navMenuItems" :key="index" :class="{'mr-2': !(navMenuItems.length === index + 1)}">
                <!-- If it's group -->
                <template v-if="item.submenu">
                    <navbar-horizontal-menu-group class="menu-group relative py-4" bottom :key="`group-${index}`" :group="item" :groupIndex="index" :open="isMenuGroupSelected($route, item.submenu)" />
                </template>

                <!-- If it's link -->
                <div v-else-if="item.url" class="menu-link">
                    <navbar-horizontal-menu-item class="relative py-4 cursor-pointer" :to="item.slug !== 'external' ? item.url : null" :href="item.slug === 'external' ? item.url : null" :icon="item.icon" :target="item.target" :isDisabled="item.isDisabled" :slug="item.slug">
                        <span class="truncate">{{ $t(item.i18n) || item.name }}</span>
                        <vs-chip :color="item.tagColor" v-if="item.tag">{{ item.tag }}</vs-chip>
                    </navbar-horizontal-menu-item>
                </div>
            </li>
        </ul>
    </vs-navbar>
</template>

<script src="./NavbarHorizontalMenu.js"></script>
<style src="./NavbarHorizontalMenu.scss" lang="scss"></style>
