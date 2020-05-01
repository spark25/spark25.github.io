<template>
  <div class="topHeader lightHeader">
    <div class="brand">
      <h1>Dr. Ajit B Deore</h1>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <nav class="hamburgerIcon">
      <v-menu bottom dark offset-y transition="slide-x-reverse-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon class="ham" v-on="on">
            <v-icon color="primary">mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <ul class="hamMenuList">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </v-list>
      </v-menu>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["nav"],
  data() {
    return {
      // nav: []
    };
  },
  methods: {}
  // created(){
  //   this.nav =  this.$store.state.nav
  // }
};
</script>

<style lang="scss">
.topHeader {
  height: 64px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  transition: all 0.3s ease-in;

  

  @include sm {
    .brand {
      h1 {
        font-size: 16px;
      }
    }
  }
  @include md {
    .brand {
      h1 {
        font-size: 18px;
      }
    }
  }
  .hamburgerIcon {
    display: none;
    @include sm {
      display: block;
    }
    @include md {
      display: block;
    }

 
  }

  nav {
    ul {
      display: flex;
      list-style: none;
      li {
        a {
          text-decoration: none;
        }
        padding: 5px;
        margin: 5px;
        font-weight: 400;

        position: relative;
        text-transform: capitalize;
        font-family: "Oswald", sans-serif;

        cursor: pointer;
        &::after {
          content: "";
          height: 3px;
          width: 0%;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: all 0.3s ease-in;
          background: $primary;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
    @include sm {
      display: none;
    }
    @include md {
      display: none;
    }
  }
}

.lightHeader {
  // background-color: rgba($color: #000000, $alpha: 0.2);
  // box-shadow: 0px 5px 18px -12px #131313;
  nav {
    ul {
      li {
        a {
          color: #eee;
          &:hover {
            color: #fff;
          }
        }
      }
      .router-link-exact-active {
        color: #fff;
      }
    }
  }
  .brand {
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }
}

.solidHeader {
  background-color: #fff;
  box-shadow: 0px 5px 18px -12px #444444;
  nav {
    ul {
      li {
        a {
          color: #4e4e4e;
          &:hover {
            color: #141414;
          }
        }
      }
      .router-link-exact-active {
        color: #141414;
      }
    }
  }
  .brand {
    opacity: 1;
  }
}
.showBrand {
  .brand {
    opacity: 1;
  }
}

.router-link-exact-active {
  position: relative;
  // color: #fff;
  &::after {
    content: "";
    width: 100% !important;
  }
}
</style>
