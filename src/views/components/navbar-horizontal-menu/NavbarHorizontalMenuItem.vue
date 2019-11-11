<template>
  <div class="navbar-horizontal-menu-item"
    :class="[
      {'h-nav-active-item text-primary font-medium' : activeLink},
      {'disabled-item pointer-events-none' : isDisabled},
    ]">

      <router-link exact
        v-if="to"
        :class="[{'router-link-active': activeLink}, 'nav-link flex items-left']"
        :to="to"
        :target="target" >
          <vs-icon v-if="!featherIcon" :icon-pack="iconPack" :icon="icon" />
          <feather-icon v-else :class="iconClasses" :icon="icon" />
          <slot />
      </router-link>

      <a v-else :target="target" :href="href" class="nav-link flex items-left">
        <vs-icon v-if="!featherIcon" :icon-pack="iconPack" :icon="icon" />
        <feather-icon v-else :class="iconClasses" :icon="icon" />
        <slot />
      </a>
  </div>
</template>

<script src="./NavbarHorizontalMenuItem.js"></script>
<style src="./NavbarHorizontalMenuItem.scss" lang="scss"></style>
