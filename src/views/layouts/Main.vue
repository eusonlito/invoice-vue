<template>
    <div class="layout--main" :class="[layoutTypeClass, navbarClasses, { 'app-page': isAppPage }]">
        <div id="content-area" :class="contentAreaClass">
            <navbar-horizontal :navbarType="navbarType" class="text-base" />

            <div class="content-wrapper">
                <div class="router-view">
                    <div class="router-content">
                        <div class="content-area__content">
                            <back-to-top bottom="5%" visibleoffset="500" v-if="!hideScrollToTop">
                                <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg btn-back-to-top" />
                            </back-to-top>

                            <transition :name="routerTransition" mode="out-in">
                                <router-view @changeRouteTitle="changeRouteTitle"></router-view>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>

            <main-footer />
        </div>
    </div>
</template>

<script src="./Main.js"></script>
