<template>
    <div class="vx-breadcrumb flex">
        <ul class="flex flex-grow">
            <li class="inline-flex items-center">
                <router-link :to="{ name: 'dashboard-index' }">
                    <feather-icon icon="HomeIcon" svgClasses="h-5 w-5 mb-1 stroke-current text-primary" />
                </router-link>

                <span class="breadcrumb-separator mx-2"><feather-icon icon="ChevronsRightIcon" svgClasses="w-4 h-4" /></span>
            </li>

            <li v-for="(item, key) in items" :key="key" class="inline-flex items-center">
                <router-link v-if="item.url" :to="{ name: item.url }" class="active">{{ item.title }}</router-link>
                <span v-else class="text-primary cursor-default">{{ item.title }}</span>
                <span class="breadcrumb-separator mx-2 flex items-start"><feather-icon icon="ChevronsRightIcon" svgClasses="w-4 h-4" /></span>
            </li>
        </ul>

        <div v-if="buttons" class="flex text-right">
            <vs-button v-for="(item, key) in buttons" :key="key" :to="item.url ? { name: item.url } : null" @click="item.click ? item.click() : null" type="border" :color="item.color ? item.clor : 'primary'">{{ item.title }}</vs-button>
        </div>
    </div>
</template>

<script src="./Breadcrumb.js"></script>