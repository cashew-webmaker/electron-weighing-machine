window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');
window.axios = require('axios');

import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: "#app",
    render(component) {
        return component(App);
    }
});