import Vue from "vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_API_ENDPOINT
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  render: h => h(App),
  apolloProvider
}).$mount("#app");
