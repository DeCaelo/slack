// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import store from './store'

// Initialize Firebase
  let config = {
    apiKey: "AIzaSyBOU1PhdotTWSNmthZfQssJ8kOo9iP4xt4",
    authDomain: "slack-a7731.firebaseapp.com",
    databaseURL: "https://slack-a7731.firebaseio.com",
    storageBucket: "slack-a7731.appspot.com",
    messagingSenderId: "1064135351475"
  };
  firebase.initializeApp(config);

  window.firebase = firebase

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  router,
  store
})
