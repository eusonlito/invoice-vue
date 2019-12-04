<template>
    <div class="layout--main" :class="[ layoutTypeClass, navbarClasses ]">
        <div id="content-area" :class="contentAreaClass">
            <navbar-horizontal :navbarType="navbarType" class="text-base" />

            <div class="content-wrapper">
                <div class="router-view">
                    <div class="router-content">
                        <div class="content-area__content">
                            <transition :name="routerTransition" mode="out-in">
                                <router-view></router-view>
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
