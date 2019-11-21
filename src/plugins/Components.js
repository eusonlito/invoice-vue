'use strict';

import Vue from 'vue'
import FeatherIcon from '@/views/components/feather-icon/FeatherIcon.vue'
import VxCard from '@/views/components/vx-card/VxCard.vue'
import Breadcrumb from '@/views/components/breadcrumb/Breadcrumb.vue'
import TimeSelectorDropdown from '@/views/components/time-selector-dropdown/TimeSelectorDropdown.vue'
import FileUpload from '@/views/components/file-upload/FileUpload.vue';
import CustomSelect from '@/views/components/custom-select/CustomSelect.vue';
import Jumbotron from '@/views/components/jumbotron/Jumbotron.vue';
import VueSimpleSuggest from 'vue-simple-suggest';
import Datepicker from 'vuejs-datepicker';

import 'vue-simple-suggest/dist/styles.css';

Vue.component(FeatherIcon.name, FeatherIcon);
Vue.component(VxCard.name, VxCard);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(VueSimpleSuggest.name, VueSimpleSuggest);
Vue.component(TimeSelectorDropdown.name, TimeSelectorDropdown);
Vue.component(FileUpload.name, FileUpload);
Vue.component(CustomSelect.name, CustomSelect);
Vue.component(Jumbotron.name, Jumbotron);
Vue.component('datepicker', Datepicker);
