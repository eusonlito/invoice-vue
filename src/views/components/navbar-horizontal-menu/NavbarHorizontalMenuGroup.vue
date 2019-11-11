<template>
  <div
    class  = "h-nav-group relative"
    :class = "[
      {'h-nav-group-open'            : openItems        },
      {'h-nav-group-active'          : open             },
      {'disabled-item pointer-events-none': group.isDisabled }
    ]"
    @mouseover = "mouseover"
    @mouseleave  = "mouseout">
      <!-- Group Label -->
      <div class="group-header w-full flex items-left">
        <span class="flex items-left w-full">

          <!-- Group Icon -->
          <feather-icon
            v-if        = "group.icon  || (this.groupIndex > Math.floor(this.groupIndex))"
            :icon       = "group.icon  || 'CircleIcon'"
            :svgClasses = "iconClasses" />

          <!-- Group Name -->
          <span class="truncate mr-3 select-none">{{ $t(group.i18n) || group.name }}</span>
        </span>

        <!-- Group Collapse Icon -->
        <feather-icon
          :class     = "[{'rotate90' : openItems}, 'feather-grp-header-arrow']"
          :icon       = "bottom ? 'ChevronDownIcon' : 'ChevronRightIcon'"
          svg-classes= "w-4 h-4" />
      </div>
      <!-- /Group Label -->

      <!-- Group Items -->
      <transition name="fade-bottom-2x">
        <ul :style="styleItems" class="h-nav-group-items navbar-horizontal-menu-dd absolute shadow-drop py-2" v-show="openItems" ref="childDropdown">
          <li v-for="(item, index) in group.submenu" :key="index">

            <navbar-horizontal-menu-group
              v-if        = "item.submenu"
              :group      = "item"
              :groupIndex = "Number(`${groupIndex}.${index}`)"
              :open       = "isMenuGroupSelected($route, item.submenu)"
              :openHover  = "openHover" />

            <navbar-horizontal-menu-item
              v-else
              icon-small
              :index  = "groupIndex + '.' + index"
              :to     = "item.slug !== 'external' ? item.url : null"
              :href   = "item.slug === 'external' ? item.url : null"
              :icon   = "itemIcon"
              :slug   = "item.slug"
              :target = "item.target">
                <span class="truncate">{{ $t(item.i18n) || item.name }}</span>
                <vs-chip class="ml-auto" :color="item.tagColor" v-if="item.tag">{{ item.tag }}</vs-chip>
            </navbar-horizontal-menu-item>

          </li>
        </ul>
      </transition>
      <!-- /Group Items -->
  </div>
</template>

<script src="./NavbarHorizontalMenuGroup.js"></script>
<style src="./NavbarHorizontalMenuGroup.scss" lang="scss"></style>