<template>
  <div class="container_navbar" id="navigation">
    <nav
      class="navbar navbar-expand-lg fixed-top primary-nav container"
      :style="color_nav"
    >
      <div class="cont_navbar">
        <button
          class="btn btn-layered offset square"
          @click="dark"
          :style="color"
        >
          <i :class="this.moon[this.darkMode]" :style="icons"></i>
          {{ this.mode[this.darkMode] }}
        </button>
        <!--<a aria-current="page" class="btn btn-layered offset square" role="button" href="/" style="text-decoration:none;">FNTwin</a>-->
        <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </button>-->
        <div class="collapse navbar-collapse" id="navbar">
          <div class="navbar-nav align-items-center ml-auto">
            <a
              class="btn btn-layered offset square"
              role="button"
              href="https://github.com/FNTwin"
              style="text-decoration: none"
              target="__blank"
              :style="color"
              ><i class="fab fa-github fa-lg"></i
            ></a>
          </div>

          <!--           <a
            class="btn btn-layered offset square"
            role="button"
            href="https://fntwin.github.io/blog/"
            style="text-decoration: none"
            target="__blank"
            :style="color"
            >Blog</a
          > -->

          <a
            :href="`${publicPath}CG_Resume.pdf`"
            class="btn btn-layered offset square"
            role="button"
            aria-pressed="true"
            style="text-decoration: none"
            :style="color"
            target="_blank"
          >
            <i class="fas fa-file fa-lg"></i> CV</a
          >

          <a
            href="mailto:cris.gabellini@gmail.com"
            class="btn btn-layered offset square mailbutton"
            role="button"
            aria-pressed="true"
            style="text-decoration: none"
            :style="color"
            @click="displaymail"
            @mouseover="hovermailIN"
            @mouseout="hovermailOUT"
          >
            <!--<i class="fas fa-envelope fa-lg"></i>
             {{this.email[mailmessage]}}</a>-->
            <i :class="this.mailicon[this.mailmessage]"></i>
            Mail me!</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation_bar",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      darkMode: false,
      email: {
        false: "Email me",
        true: "cris.gabellini@gmail.com",
      },
      mailmessage: false,
      click: false,
      moon: {
        false: "fas fa-moon",
        true: "fas fa-lightbulb fa-lg",
      },
      mailicon: {
        false: "fas fa-envelope fa-lg",
        true: "fas fa-envelope-open fa-lg",
      },
      mode: {
        false: " Dark",
        true: " Light",
      },
    };
  },
  computed: {
    color() {
      if (this.darkMode) {
        return {
          color: "#8F3E8F!important",
          //"background-image": "linear-gradient(to right, #743ad5 0%, #d53a9d 100%)!important",
          background: "#403D40",
          transition: ".3s ease-in-out",
        };
      } else {
        return {};
      }
    },
    color_nav() {
      if (this.darkMode) {
        return {
          //"background": "#332A35"
          background: "#201F20",
        };
      } else {
        return {};
      }
    },
  },
  watch: {
    darkMode() {},
  },
  methods: {
    dark() {
      this.darkMode = !this.darkMode;
      this.$emit("toggle-dark");
      this.$root.$emit("toggle-dark");
    },
    displaymail() {
      this.mailmessage = true;
      this.click = true;
      //Change letter to click
    },
    hovermailIN() {
      //this.mailmessage = true;
    },
    hovermailOUT() {
      if (this.click) {
        this.mailmessage = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 100%;
  border-bottom: 2px solid black;
  background: #d9d7d3;
  margin-right: auto;
  margin-left: auto;
  height: 4.1rem;
  transition: 0.3s ease-in-out;
}

.cont_navbar {
  display: flex;
  width: 100%;
  max-width: 1600px;
  margin: auto;
  justify-content: space-between;
  justify-self: center;
  flex-direction: row;
}

.fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}

.navbar-expand-lg .navbar-collapse {
  display: flex !important;
  width: auto;
  flex-basis: auto;
  position: sticky;
}

.collapse:not(.show) {
  display: none;
}

.fixed-bottom,
.fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-top {
  top: 0;
}

*,
:after,
:before {
  box-sizing: border-box;
}

div {
  display: block;
}

.primary-nav {
  font-family: CircularStd, sans-serif;
  font-weight: 700;
}

.square {
  opacity: 1;
  border-radius: 5px !important;
}

.square:hover {
  transition: 0.2s;
  opacity: 0.3;
  /* background: rgba(217, 215, 211, 0.3); */
}

.offset {
  box-shadow: 0.4em 0.3em 0 0 #1f0934;
}

.btn-layered {
  background: #ebebef;
  border: 2px solid #1f0934;
  font-family: CircularStd, sans-serif !important;
  font-size: 10pt;
  font-weight: 500;
  line-height: 1;
  padding: 10px 10px;
  transition: 0.3s ease-out;
  -webkit-transition: 0.3s ease-out;
  color: #1f0934 !important;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #1f0934;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
}

a {
  margin-left: 10px;
  color: #1f0934;
  text-decoration: none;
  background-color: transparent;
}

a:link {
  text-decoration: none;
}

*,
:after,
:before {
  box-sizing: border-box;
}

a:-webkit-any-link {
  color: #2b282d;
  cursor: pointer;
  text-decoration: underline;
}
</style>
