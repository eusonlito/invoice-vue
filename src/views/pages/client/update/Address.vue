<template>
    <div>
        <div class="vx-row match-height">
            <div class="vx-col w-full md:w-1/4 mb-base" v-for="(item, index) in list" :key="item.key" ref="list">
                <update-address-form :item="item" v-on:addressDeleted="addressDeleted(index)"></update-address-form>
            </div>

            <div v-if="!list.length" class="vx-col w-full md:w-1/4 mb-base">
                <update-address-form :item="{}"></update-address-form>
            </div>
        </div>

        <vx-card noShadow>
            <div class="text-right">
                <vs-button @click.prevent="duplicate">Añadir</vs-button>
            </div>
        </vx-card>
    </div>
</template>

<script src="./Address.js"></script>