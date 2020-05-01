<template>
  <v-app id="app">
    <NavBar :nav="nav" />
    <router-view />
    <footer class="pa-4">
      <div class="footerNav">
        <nav>
          <ul class="d-flex">
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Education</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <v-divider dark></v-divider>
      <v-row class="pa-4 d-flex align-center">
        Social
        <v-btn dark class="px-3" v-for="(icon, i) in social" :key="i" icon :href="icon.route">
          <v-icon>{{icon.name}}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <div class="px-2">
          <v-icon dark left>mdi-phone</v-icon>+91-1234567890
        </div>
        <div>
          <v-icon dark left>mdi-email</v-icon>ajit.deore@mitwpu.edu.in
        </div>
      </v-row>
      <v-divider dark></v-divider>
      <v-row class="py-4">
        <v-spacer></v-spacer>
        <div class="overline">Dr. Ajit B Deore</div>
        <v-spacer></v-spacer>
      </v-row>
    </footer>
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      nav: [],
      social: []
    };
  },
  created() {
    this.nav = this.$store.state.nav;
    this.social = this.$store.state.social;
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import url("https://fonts.googleapis.com/css2?family=Damion&display=swap");

footer {
  color: #eee;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  .footerNav {
    nav {
      ul {
        list-style: none;
        align-items: center;
        justify-content: center;
        li {
          font-family: "Oswald";
          padding: 10px;
          cursor: pointer;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
