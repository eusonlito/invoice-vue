<template>
    <div class="dropdown-multiple">
        <vs-dropdown v-if="serie" vs-trigger-click class="cursor-pointer mr-5">
            <small class="flex cursor-pointer">
                <span>{{ serie.name }}</span>
                <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="ml-1" />
            </small>

            <vs-dropdown-menu class="w-32">
                <vs-dropdown-item v-for="(item, key) in series" :key="key" @click="change(item, option)">{{ item.name }}</vs-dropdown-item>
            </vs-dropdown-menu>
        </vs-dropdown>

        <vs-dropdown v-if="option" vs-trigger-click class="cursor-pointer">
            <small class="flex cursor-pointer">
                <span>{{ option.title }}</span>
                <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="ml-1" />
            </small>

            <vs-dropdown-menu class="w-32">
                <vs-dropdown-item v-for="(item, key) in options" :key="key" @click="change(serie, item)">{{ item.title }}</vs-dropdown-item>
            </vs-dropdown-menu>
        </vs-dropdown>
    </div>
</template>

<script src="./TimeSelectorDropdown.js"></script>
