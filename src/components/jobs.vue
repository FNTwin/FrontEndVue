<template>
  <div id="test" class="container_all">
    <!--<div class="container2" :style="this.color_main">-->
    <div class="titleexp">
      <h1> My experience.</h1>
    </div>
    <div class="container2">

      <div class="image_container">
        <div class="timeline">

          <div class="contdot">
            <div class="holder3att" :style="darkact"></div>
            <div class="verticalline" :style="darkline"></div>
          </div>

          <div class="contdot">
            <div class="holder3" :style="darkcircle"></div>
            <div class="verticalline" :style="darkline"></div>
          </div>
          <div class="contdot">
            <div class="holder3" :style="darkcircle"></div>
          </div>


        </div>
        <div class="jobs">
          <div class="holder2" :style="darkproject">
            <h1 class="headerjob">Researcher | 01/2021 - Now</h1>
            <h3>University of Trieste<br>
            Computational models of a variety of SAM-AuNPs<br>
            Machine Learning on atomistic and coarse grain simulations</h3>
          </div>
          <div class="holder2" :style="darkproject">
            <h1 class="headerjob">Research | 02/2020 - 05/2020</h1>
            <h3>University of Jan Evangelista (UJEP)<br>
            Machine Learning for nanomaterials simulations<br>
            Atomistic and coarse grain simulations</h3>
          </div>
          <div class="holder2" :style="darkproject">
            <h1 class="headerjob">Technical system engineer  </h1>
            <h3>Internship - Fincantieri S.p.A.<br>
            Designed and implemented new routines for parametric modeling<br>
            Developed internal procedures to decrease man-hours on modeling</h3>
          </div>

        </div>



      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jobs",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      night: false
    }
  },
  mounted() {
    this.$root.$on("toggle-dark", this.switch);
  },
  methods: {
    switch() {
      this.night = !this.night
    }
  },
  computed: {
    darkproject() {
      if (this.night) {
        return {
          "background": "#403D40",
          "box-shadow": "0.2em 0.1em 0 0 #1F0934",

        };
      } else {
        return {}
      }
    },
    correctcolor(){
      if (this.night) {
        return {
          "color": "#A6A4A6",
          "transition": ".3s ease-in-out"
        }
      } else {
        return {}
      }
    },
    darkcircle(){
      if (this.night) {
        return {
          "border": "2px solid #8F3E8F",
          "transition": ".3s ease-in-out"
        }
      } else {
        return {}
      }
    },
    darkact(){
      if (this.night) {
        return {
          "border": "2px solid #8F3E8F",
          "background": "#A6A4A6",
          "transition": ".3s ease-in-out"
        }
      } else {
        return {}
      }
    },
    darkline(){
      if (this.night) {
        return {
          "border-left": "2px solid #8F3E8F",
          "transition": ".3s ease-in-out"
        }
      } else {
        return {}
      }
    },
    mod() {
      if (this.night) {
        return {
          "background": "#403D40"
        };
      } else {
        return {}
      }
    },
    dataplot() {
      return this.test
    },
    color_main() {
      if (this.night) {
        return {
          "background": "#201F20",
          "color": "#A6A4A6",
        };
      } else {
        return {}
      }
    }
  }
}
</script>

<style scoped>

.container2 {
  max-width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  height: auto;
}

.image_container {
  display: flex;
  #flex-direction: row;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 5%;
  width: 90%;
  height: 90%;
  max-width: 1500px;
}


.verticalline {
  position: absolute;
  border-left: 3px solid #252225;
  height: 90%;
  margin-top: 6.4vh;
  padding-right: 17.1%;

}

.holder2 {
  display: flex !important;
  background: #D9D7D3;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  transition: 0.1s;
  width: 80%;
  height: 10vh;
  max-width: 1000px;
  max-height: 460px;
  border: 2px solid black;
  position: relative;
  border-radius: 8px;
  margin: auto;
  margin-bottom: 1.6vh;

  flex-direction: column;
}




.contdot {
  display: flex !important;
  justify-content: flex-end;
  transition: 0.1s;
  width: 80%;
  height: 10vh;
  max-width: 1000px;
  max-height: 460px;
  position: relative;
  margin: auto;
  margin-bottom: 1.6vh;
  padding-left: 50%;
}

.holder3 {
  transition: 0.1s;
  width: 2vh;
  height: 2vh;
  max-width: 1000px;
  max-height: 460px;
  border: 2px solid black;
  position: relative;
  border-radius: 50%;
  margin: auto;
}

.holder3att {
  background: #403D40;
  transition: 0.1s;
  width: 2vh;
  height: 2vh;
  max-width: 1000px;
  max-height: 460px;
  border: 2px solid black;
  position: relative;
  border-radius: 50%;
  margin: auto;
}

.timeline{
  display: flex !important;
  justify-content: flex-end;
  flex-direction: column;
  width: 20%;
  height: 36vh;
}
.jobs{
  width: 60%;
  height: 36vh;

}

.titleexp{
  display: flex !important;
  margin: auto;
  align-content: center;
  justify-content: center;
}


h1 {
  font-weight: bold;
  letter-spacing: .13em;
  font-size: min(6.5vw, 4.7em);
}

.headerjob{
  font-size: min(3vw, 2em);
  letter-spacing: .1em;
  padding-left: 4px;
  padding-top: 2px;
}

h2 {
  display: block;
  margin-top: auto;
  font-size: min(2.5vw, 1.2em);
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-left: 1vw;
  font-weight: bold;
  color: #252225;
  font-family: CircularStd, sans-serif !important;
  font-style: italic;
}

h3 {
  display: block;
  font-size: min(2vw, 1.2em);
  font-weight: normal;
  padding-left: 4px;
  line-height: 1.1em;
}


</style>