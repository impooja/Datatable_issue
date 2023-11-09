import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";

//Bootstrap dependencies
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import 'bootstrap-icons/font/bootstrap-icons.css'


// Fontawesome dependencies
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@fortawesome/fontawesome-free/js/all";

// library.add(faHatWizard)

import "./assets/css/styles.css";
import "./assets/css/ausa.css";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App);
app.use(LoadingPlugin, {
    color:'green',
    loader:'bars'
})
app.use(Vue3Toastify, {
    autoClose: 3000,
    hideProgressBar:true,
    theme:'light'
} as ToastContainerOptions);


app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios); // provide axios

app.use(createPinia());
app.use(router);

// app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

/**
 * 
 * The application instance exposes a .config object that allows us to configure a few app-level options,
 *  for example, defining an app-level error handler that captures errors from all descendant components:
 * 
 */
app.config.errorHandler = (err) => {
    console.log(err);
}
