 <template>
    <div class="vx-card" ref="card" :class="[
        {'overflow-hidden': tempHidden},
        {'no-shadow': noShadow},
        {'rounded-none': noRadius},
        {'card-border': cardBorder},
        cardClasses ]" :style="cardStyles"
        v-on="$listeners">
        <div class="vx-card__header" v-if="hasHeader">
            <!-- card title -->
            <div class="vx-card__title">
                <h4 v-if="this.$props.title" :style="titleStyles" :class="titleClasses">{{ title }}</h4>
                <h6 v-if="this.$props.subtitle" :style="subtitleStyles" :class="subtitleClasses">{{ subtitle }}</h6>
            </div>

            <div class="vx-card__actions" v-if="hasAction">
                <slot name="actions">
                    <div class="vx-card__action-buttons" v-if="collapseAction">
                        <feather-icon @click="toggleContent" icon="ChevronUpIcon" :class="{ rotate180: !isContentCollapsed }" class="ml-4" />
                    </div>
                </slot>
            </div>
        </div>

        <div class="vx-card__collapsible-content vs-con-loading__container" ref="content" :class="[{ collapsed: isContentCollapsed }, { 'overflow-hidden': tempHidden }]" :style="StyleItems">
            <!-- content with no body(no padding) -->
            <slot name="no-body"></slot>

            <!-- content inside body(with padding) -->
            <div class="vx-card__body" v-if="this.$slots.default">
                <slot></slot>
            </div>

            <!-- content with no body(no padding) -->
            <slot name="no-body-bottom"></slot>

            <div class="vx-card__footer" v-if="this.$slots.footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script src="./VxCard.js"></script>
<style src="./VxCard.scss" lang="scss"></style>
