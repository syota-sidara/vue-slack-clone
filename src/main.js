import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBTWsn0IdngaNoD0BqLXPrNWTq-VBiqa_c",
  authDomain: "vue-slack-clone-67f6e.firebaseapp.com",
  databaseURL: "https://vue-slack-clone-67f6e.firebaseio.com",
  projectId: "vue-slack-clone-67f6e",
  storageBucket: "vue-slack-clone-67f6e.appspot.com",
  messagingSenderId: "855777234694",
  appId: "1:855777234694:web:2878ab2c6c790962649887",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
