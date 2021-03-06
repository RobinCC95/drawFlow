import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import router from './router'
import 'drawflow/dist/drawflow.min.css'
import 'drawflow/dist/drawflow.min.js'
//import { css, LitElement, html } from 'lit-element';
// import Drawflow from 'drawflow'
import styleDrawflow from 'drawflow/dist/drawflow.min.css'
// import { style } from '../dist/drawflow.style';
createApp(App).use(router, { style: styleDrawflow }).mount('#app')
//createApp(App).use(router).mount('#app')
