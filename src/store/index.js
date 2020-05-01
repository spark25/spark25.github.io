import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nav:[
      {
        name: "Home",
        route: "Home"
      },
      {
        name: "About",
        route: "About"
      },
      {
        name: "Projects",
        route: "About"
      },
      {
        name: "Contact",
        route: "About"
      }
    ],
    clients:[
      {
        client: "Hyatt"
      },
      {
        client: "Apollo"
      },
      {
        client: "Notto"
      },
      {
        client: "AVS Project"
      },
      {
        client: "TF Enterprises"
      },
    ],
    social:[
      {
        name: "mdi-facebook",
        route: "http://facebook.com"
      },
      {
        name: "mdi-youtube",
        route: "http://youtube.com"
      },
      {
        name: "mdi-linkedin",
        route: "http://linkedin.com"
      },
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
