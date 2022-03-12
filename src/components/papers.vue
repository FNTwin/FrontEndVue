<template>
  <div id="test" class="container_placeholder">
    <div class="titleexp">
      <h1>My papers.</h1>
    </div>
    <!-- <h2 class="placeholder">To be updated soon ;).</h2> -->
    <h2 class="center_container"> 
      <p v-for="paper in papersarray"  :key="paper.name">
      <strong>{{paper.name}}</strong> - {{paper.journal}} 
       {{paper.authors}}  {{paper.years}} 
      </p>
    </h2>
  </div>
</template>

<script>
export default {
  name: "papers",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      night: false,
      papersarray: [
        {name: "oxo-Graphene as an efficient carrer for gene delivery",
         journal: "Accepted for publication in Carbon",
         authors: "",
         years: ""} ,
        {name: "Surface accessibility of AuNPs",
         journal: "Manuscript in preparation",
         authors: "",
         years: ""},
        {name: "Solvent-mediated interactions at the interface of AuNPs",
         journal: "Manuscript in preparation",
         authors: "",
         years: ""},
        {name: "Brownian Dynamics Optimization",
         journal: "Manuscript in preparation",
         authors: "",
         years: ""}
      ]
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

.center_container {
  display: flex;
  padding-left: 1.0vw; 
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  flex-direction: column;
}

h1 {
  font-weight: bold;
  letter-spacing: 0.13em;
  font-size: min(6.5vw, 4.7em);
}

h2 {
  font-size: min(4vw, 1.5em);
}

p {
  font-size: 1em;
  line-height: 1.75em;
  border-top: 3px solid;
  border-image: linear-gradient(to right, #743ad5 0%, #d53a9d 100%);
  border-image-slice: 1;
  border-width: 3px;
  margin: 0;
  padding: 40px;
  counter-increment: section;
  position: relative;
  font-size: 23px;
}
p:nth-child(even) {
  border-right: 3px solid;
  padding-left: 0;
}

p:nth-child(odd) {
  border-left: 3px solid;
  padding-right: 0;
}

p:first-child {
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
p:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

li {
  list-style-type: circle;
  margin: 0px;
  padding: 0px;
}

</style>