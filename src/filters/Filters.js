'use strict';

import Vue from 'vue';

Vue.filter('float', value => {
    return (isNaN(value = parseFloat(value || 0)) ? 0 : value).toFixed(2);
});

Vue.filter('parseFloat', value => {
    return isNaN(value = parseFloat(value || 0)) ? 0 : value;
});

Vue.filter('money', amount => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
});

Vue.filter('percent', (total, partial) => {
    return (partial * 100) / total;
});

Vue.filter('date', value => {
    return value.split(' ')[0];
});

Vue.filter('stringToHex', string => {
    return Vue.stringToHex(string);
});