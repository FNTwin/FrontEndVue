<template>
  <div class="bioContainer">
    <div class="nametitle">
      <h1>Cristian "FNTwin" Gabellini</h1>
    </div>
    <h2 class="tldr">
      Computational Material Engineer specialized in multiscale simulations
      and Machine Learning.
    </h2>
    <div class="tldrme" :style="tldrmedark">
      <div class="aboutmetext" :style="aboutmedark">
        <div class="aboutme" :style="aboutmetextdark">
          <h4 :style="h4dark">About me!</h4>
        </div>
        <h3 :style="h3dark">
          I'm just a guy from Gorizia with a burning passion for the microscopic universe and the computation world.
          Ab-Initio, All-atoms and Coarse-grain simulations!<br>
          On my last year of bachelor's I discovered my love for machine learning
          and I started focusing on its theory and its application in the simulation field.
          At the end of my master I was able to develop a novel machine learning
          approach to optimize a Dissipative Particle Dynamics force field.</h3>
      </div>
    </div>
    <div class="tldrme" :style="tldrmedark">
      <div class="aboutmetext" :style="aboutmedark">
        <div class="aboutme" :style="aboutmetextdark">
          <h4 :style="h4dark">Skills</h4>
        </div>
        <h3 style="font-size: 1.5em">
          Languages & Frameworks: <p :style="h3dark">Python, C++, HTML/CSS, Javascript,
          Flask, FastAPI, Vue.js</p>
          Packages: <p :style="h3dark">NumPy, SciPy, Pandas, Matplotlib, Tensorflow,
          scikit-learn, OpenCV, MDanalysis</p>
          Databases: <p :style="h3dark">MySQL, MongoDB</p>
          Miscellaneous: <p :style="h3dark">GIT, Unit testing</p>
        </h3>
      </div>
    </div>
    <div class="mail" :style="paddingemail">
      <a class="email-link" :style="maildark" href="mailto:cris.gabellini@gmail.com">cris.gabellini@gmail.com</a>
    </div>
    <div class="project" :style="projectdark">
      <h1>Some of my projects.</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: "bio",
  data(){ return {
    night: false
  }
  },
  mounted(){
    this.$root.$on("toggle-dark" , this.switch);
  },
  methods: {
    switch() {
      this.night = !this.night
    }
  },
  computed:{
    color_skills(){
      if (this.night){
        return {
          "background":"black",
        };
      } else{
        return {}
      }
    },
    aboutmedark(){
      if (this.night){
        return {
          "background": "#403D40",
          "width": "100%",
          "text-align": "center",
          "padding-right": "10px",
          "align-self":" center",
          "border": "2px solid black",
          "border-radius": "2vw",
          "box-shadow": "0.4em 0.2em 0 0 #1F0934",
          "color":"#830F8E",
          "padding-top": "10px",
        }
      }else{
        return {}
      }
    },
    h3dark(){
      if (this.night){
        return {
          "color":"#A6A4A6"
        }
      }else{
        return {}
      }
    },
    h4dark(){
      if (this.night){
        return {
          "font-size":"2em"
        }
      }else{
        return {}
      }
    },
    maildark(){
      if (this.night){
        return {
          "background":"#CBBECC",
        }
      }else{
        return {}
      }
    },
    paddingemail(){
      if (this.night){
        return {
          "justify-content": "center",
          "margin-left":"0vh"

        }
      }else{
        return {}
      }
    },
    aboutmetextdark(){
      if (this.night){
        return {
          "background": "#403D40",
          "width": "auto",
          "text-align": "center",
          "padding-right": "5vw",
          "border-radius": "2vw",
          "align-self":" center",
        }
      }else{
        return {}
      }
    },
    projectdark(){
      if (this.night){
        return {
          "width": "auto",
          "text-align": "center",
          "padding-right": "5vw",
          "border-radius": "2vw"
        }
      }else{
        return {}
      }
    },
    tldrmedark(){
      if (this.night){
        return {
          "width": "100%",
          "padding-right":"7vw",
        }
      }else{
        return {}
      }
    }
  }
}
</script>

<style scoped>

.bioContainer{
  display: flex;
  flex-direction: column;
  font-family: CircularStd,sans-serif;
  width:auto;
  font-size: 100%;

}

.nametitle{
  width: 80%;
  padding-right: 10px;
  align-self: center;
}

.aboutme{
  background: white;
  width: auto;
  padding-left: 5vw;
}

.tldr{
  padding-left: 5vw;
  width: 70%;

}

.tldrme{
  display: flex;
  flex-direction: column;
  padding-left: 7vw;
  width: 70%;
  padding-top: 20px;
}

.aboutmetext{
  width: auto;
  background: white;
  padding-right: 10px;
}

.skills{
  background: gray;
  padding-left: 5vw;
}

p{
  color:red;
  font-size: 0.9em;
}

h1{
  font-size: 5vw;
  font-weight: bold;
}

h2{
  font-size: 3vw;
}

h3{
  font-size: 1.4em;
}

h4{
  font-size: 4vw;
  font-weight: bold;
}

.mail{
  display: flex;
  margin-top:3vh;
  margin-left: 5vw;
  margin-bottom: 3vh;
  justify-content: flex-start;
}
.email-link{
  border: 2px solid black ;
  border-radius: 7px;
  padding: 10px;
  color: black;
  text-decoration: underline;
  font-size: 1.3em;

}

.project{

  width: auto;
  padding-left: 5vw;
}
</style>