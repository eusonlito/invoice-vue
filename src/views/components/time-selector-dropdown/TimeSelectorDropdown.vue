<template>
    <vs-dropdown vs-trigger-click class="cursor-pointer">
        <small class="flex cursor-pointer">
            <span>{{ current.title || options[0].title }}</span>
            <feather-icon icon='ChevronDownIcon' svgClasses='h-4 w-4' class='ml-1' />
        </small>

        <vs-dropdown-menu class="w-32">
            <vs-dropdown-item v-for="(option, key) in options" :key="key" @click="selected(option)">{{ option.title }}</vs-dropdown-item>
        </vs-dropdown-menu>
    </vs-dropdown>
</template>

<script src="./TimeSelectorDropdown.js"></script>
