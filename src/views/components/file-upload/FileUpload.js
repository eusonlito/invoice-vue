'use strict';

export default {
    name: 'file-upload',

    props: {
        files: Array,

        upload: {
            type: Function,
            required: true
        },
        remove: Function,
        open: Function
    },

    data() {
        return {
            selected: false
        }
    },

    methods: {
        change(e) {
            const files = e.target.files;

            for (const index in files) {
                if (files.hasOwnProperty(index)) {
                    this.upload(files[index]);
                }
            }
        }
    }
}