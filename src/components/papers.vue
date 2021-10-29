<template>
  <div id="test" class="container_placeholder">
    <div class="titleexp">
      <h1>My Papers.</h1>
    </div>
    <h2 class="placeholder">To be updated soon ;).</h2>
  </div>
</template>

<script>
export default {
  name: "papers",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      night: false,
    };
  },
  mounted() {
    this.$root.$on("toggle-dark", this.switch);
  },
  methods: {
    switch() {
      this.night = !this.night;
    },
  },
  computed: {
    darkproject() {
      if (this.night) {
        return {
          background: "#403D40",
          "box-shadow": "0.2em 0.1em 0 0 #1F0934",
        };
      } else {
        return {};
      }
    },
  },
};
</script>

<style scoped>
.container_placeholder {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: CircularStd, sans-serif;
  font-size: 100%;
  width: 90%;
  max-width: 1000px;
  margin: auto;
}

.titleexp {
  display: flex !important;
  margin: auto;
  align-content: center;
  justify-content: center;
}

.placeholder {
  display: flex;
  padding-left: 7.2vw;
  width: 89%;
  margin-top: 10px;
  justify-content: center;
}

h1 {
  font-weight: bold;
  letter-spacing: 0.13em;
  font-size: min(6.5vw, 4.7em);
}

h2 {
  font-size: min(4vw, 1.5em);
}
</style>