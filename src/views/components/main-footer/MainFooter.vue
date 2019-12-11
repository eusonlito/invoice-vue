<template functional>
    <footer class="the-footer text-center">
        <span>@ {{ new Date().getFullYear() }}</span>
        <router-link :to="{ name: 'dashboard-index' }">Inicio</router-link>
        <router-link :to="{ name: 'info-roadmap' }">Roadmap</router-link>
        <router-link :to="{ name: 'info-legal-privacity' }">Aviso Legal</router-link>
        <router-link :to="{ name: 'contact' }">Contacto</router-link>
    </footer>
</template>

<script src="./MainFooter.js"></script>
