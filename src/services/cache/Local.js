'use strict';

export default {
    enabled() {
        try {
            localStorage.setItem('local-storage-test', Math.random());
            localStorage.removeItem('local-storage-test');
        } catch (e) {
            return false
        }

        return true;
    },

    item(tag) {
        let value = localStorage.getItem(tag);

        if (value) {
            return JSON.parse(value);
        }
    },

    get(tag) {
        return this.item(tag);
    },

    set(tag, value) {
        localStorage.setItem(tag, JSON.stringify(value));

        return value;
    },

    remove(tag, value) {
        localStorage.removeItem(tag);

        return value;
    },

    clear() {
        localStorage.clear();
    }
}
