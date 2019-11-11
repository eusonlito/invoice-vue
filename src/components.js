'use strict';

import Vue from 'vue'
import FeatherIcon from '@/views/components/feather-icon/FeatherIcon.vue'
import VxCard from '@/views/components/vx-card/VxCard.vue'
import Breadcrumb from '@/views/components/breadcrumb/Breadcrumb.vue'
import TimeSelectorDropdown from '@/views/components/time-selector-dropdown/TimeSelectorDropdown.vue'
import FileUpload from '@/views/components/file-upload/FileUpload.vue';
import VueSimpleSuggest from 'vue-simple-suggest';
import Datepicker from 'vuejs-datepicker';

import 'vue-simple-suggest/dist/styles.css';

Vue.component(FeatherIcon.name, FeatherIcon);
Vue.component(VxCard.name, VxCard);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(VueSimpleSuggest.name, VueSimpleSuggest);
Vue.component(TimeSelectorDropdown.name, TimeSelectorDropdown);
Vue.component(FileUpload.name, FileUpload);
Vue.component('datepicker', Datepicker);

import vSelect from 'vue-select'

vSelect.props.components.default = () => ({
    Deselect: {
        render: createElement => createElement('feather-icon', {
            props: {
                icon: 'XIcon',
                svgClasses: 'w-4 h-4 mt-1'
            }
        }),
    },
    OpenIndicator: {
        render: createElement => createElement('feather-icon', {
            props: {
                icon: 'ChevronDownIcon',
                svgClasses: 'w-5 h-5'
            }
        }),
    },
});

Vue.component('v-select', vSelect);
