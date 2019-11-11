'use strict';

export default {
    UPDATE_MAIN_LAYOUT_TYPE(state, val) {
        state.mainLayoutType = val
    },

    TOGGLE_CONTENT_OVERLAY(state, val) {
        state.bodyOverlay = val
    },

    UPDATE_WINDOW_WIDTH(state, width) {
        state.windowWidth = width
    },

    UPDATE_WINDOW_SCROLL_Y(state, val) {
        state.scrollY = val
    },
}
