<template>
    <div class="flex">
        <navbar-horizontal-menu class="flex-grow" :navMenuItems="navMenuItems" />

        <div class="vs-navbar vx-navbar navbar-skelton flex-1 justify-end">
            <div class="flex items-center text-right">
                <header-notifications />

                <vs-dropdown vs-trigger-click class="cursor-pointer">
                    <div class="con-img ml-3">
                        <img key="onlineImg" src="@/assets/images/profile/avatar.png" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
                    </div>

                    <vs-dropdown-menu class="vx-navbar-dropdown">
                        <ul style="min-width: 9rem">
                            <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$router.push({ name: 'user-update' })">
                                <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                                <span class="ml-2">Perfil</span>
                            </li>

                            <vs-divider class="m-1"></vs-divider>

                            <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="logout">
                                <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
                                <span class="ml-2">Salir</span>
                            </li>
                        </ul>
                    </vs-dropdown-menu>
                </vs-dropdown>
            </div>
        </div>
    </div>
</template>

<script src="./NavbarHorizontal.js"></script>
