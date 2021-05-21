<template>
  <div class="bioContainer">
    <div class="nametitle">
      <h1 id="dash">> </h1>
      <h1>{{ nome }}</h1>
    </div>
    <h2 class="tldr">
      Computational Material Engineer specialized in multiscale simulations
      and Machine Learning. <br>
      Researcher in molecular simulations at University of Trieste.
    </h2>
    <div class="tldrme" :style="tldrmedark" ref="scroll">
      <div class="aboutmetext" :style="aboutmedark">
        <div class="aboutme" :style="aboutmetextdark">
          <div class="header_bottoni">
            <div class="header_bottone_red"></div>
            <div class="header_bottone_giallo"></div>
            <div class="header_bottone_verde"></div>
          </div>
        </div>
        <div class="scrolltext">
          <h3><!--
          > Cristian.contact <p :style="h3dark">
          ["<a href="mailto:cris.gabellini@gmail.com"
               aria-pressed="true"
               style="text-decoration:none;"
               :style="color">cris.gabellini@gmail.com</a>",
          "<a href="https://github.com/FNTwin"
             style="text-decoration:none;"
             target="__blank"  :style="color">Github</a>"]
        </p>
          > Cristian.education <p :style="h3dark">
          ["Bachelor's degree in Industrial Engineering", "Master's degree in Material Engineering"]
        </p>
          > Cristian.languages <p :style="h3dark">["Python", "C++", "HTML/CSS", "Javascript",
          "Flask", "FastAPI", "Vue.js"]</p>
          > Cristian.packages <p :style="h3dark">["NumPy", "SciPy", "Pandas", "Matplotlib", "Tensorflow",
          "scikit-learn", "OpenCV", "MDanalysis"]</p>
          > Cristian.databases <p :style="h3dark">["MySQL", "MongoDB"]</p>
          > Cristian.various <p :style="h3dark">["GIT", "Unit testing"]</p>-->
            <ul id="commands_list" style="list-style-type:none;">
              <li v-for="(item,index) in itmes" :key="index">
                <h3 id="commandtext">> {{ command_array[index] }}</h3>
                <p id="listext" :style="h3dark">{{ cycle_array[index] }}</p>
              </li>
            </ul>
            > <input type="text" v-model="back_nome"
                     v-on:keypress.enter="digitazione"
                     class="digit">
          </h3>
        </div>
      </div>
    </div>
    <div class="project" :style="projectdark">
      <h1 id="project">Some of my projects.</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: "bio",
  data() {
    return {
      night: false,
      nome: "Cristian Gabellini",
      display_nome: "",
      back_nome: "",
      display_array: [],
      cycle_array: [],
      command_array: [],
      options: {
        "clear": "",
        "Cristian.education": "[\"Bachelor's degree in Industrial Engineering\", \"Master's degree in Material Engineering\"]",
        "Cristian.languages": "[\"Python\", \"C++\", \"Fortran\",  \"HTML/CSS\", \"Javascript\"]",
        "Cristian.packages": "[\"Numpy\", \"SciPy\", \"Pandas\", \"Matplotlib\", \"PyTorch\", \"Tensorflow\", \"scikit-learn\",  \"MDanalysis\" ," +
            "\"Flask\", \"FastAPI\"]",
        "Cristian.databases": "[\"MySQL\", \"MongoDB\"]",
        "Cristian.various": "[\"GIT\", \"Bash\", \"Jupyter\", \"Unit testing\"]",
        "Cristian.corva": "\"Stop making me do frontend please\"",
        "Cristian.email": "\"cris.gabellini@gmail.com\"",
        "Cristian.ml": "[\"Gaussian Processes\", " +
            "\"Bayesian Optimization\", \"Deep Learning\"]",
        "Cristian.gabbo": "\"This guy owes us an elevator\"",
        "Cristian.location": "\"Gorizia (GO), Italy\"",
        "Cristian.aboutMe": "\"Just a guy with a passion for machine learning and for numerical modeling of materials." +
            " I focused my studies on multiscale modelling techniques and still try to make them better by using new machine learning approaches\"",
        "Cristian.simulations": "[\"Ab-initio\", \"All-Atoms\", \"Coarse-graining DPD and BD\"]",
        "Cristian.interests": "[\"Skateboard\", \"Snowboard\", \"Programming\", \"Computation\", \"Videogames\"]",
        "Cristian.esport": "\"Professional Call of Duty and Overwatch player\"",
        "Cristian.simulationSoftwares": "[\"Quantum-espresso\", \"Amber\", \"LAMMPS\", \"GROMACS\", \"DigiMat\"]",
        "help": "Cristian.esport Cristian.email Cristian.ml Cristian.gabbo Cristian.corva Cristian.location" +
            " Cristian.aboutMe Cristian.interests Cristian.simulations Cristian.simulationSoftwares" +
            " Cristian.education Cristian.languages Cristian.packages Cristian.databases Cristian.various clear"
      },
    }
  },
  mounted() {
    this.$root.$on("toggle-dark", this.switch);
    this.name_init(0, this)
    console.log("Welcome on my webpage! Type help in the terminal to see the available commands!")
    this.init("Cristian.education")
    this.init("Cristian.languages")
    this.init("Cristian.packages")
    this.init("Cristian.databases")
    this.init("Cristian.various")
  },
  methods: {
    init(nome) {
      this.display_nome = this.options[nome]
      this.add(this.display_nome)
      this.add2(nome)
    },
    switch() {
      this.night = !this.night
    },
    name_init(index, arg) {
      for (let index = 0; index < arg.nome.length; index++) {
        console.log(arg.display_nome.concat(arg.nome[index]))
        arg.display_nome.concat(arg.nome[index])
      }
    },
    add(value) {
      this.display_array.push(value)
      this.cycle_array = this.display_array
    },
    add2(value) {
      this.command_array.push(value)
    },
    clear() {
      this.command_array = [];
      this.cycle_array = [];
      this.display_array = [];
    },
    digitazione() {
      let temp = this.back_nome
      this.back_nome = ""
      if (temp in this.options) {
        this.display_nome = this.options[temp]
        this.add(this.display_nome)
        this.add2(temp)
        if (temp === "clear") {
          this.clear()
        }
      } else {
        if (temp.replace(/\s/g, "") === "") {
          this.display_nome = ""
        } else {
          this.display_nome = temp + ": command not found"
          this.add(this.display_nome)
          this.add2(temp)
        }
      }
    },
    show(event) {
      this.back_nome = event.target.value
    },
  },
  computed: {
    itmes() {
      return this.cycle_array
    },
    color_skills() {
      if (this.night) {
        return {
          "background": "black"
        };
      } else {
        return {}
      }
    },
    aboutmedark() {
      if (this.night) {
        return {}
      } else {
        return {}
      }
    },
    h3dark() {
      if (this.night) {
        return {}
      } else {
        return {}
      }
    },
    h4dark() {
      if (this.night) {
        return {}
      } else {
        return {}
      }
    },
    maildark() {
      if (this.night) {
        return {
          "background": "#CBBECC",
          "transition": ".3s ease-in-out"
        }
      } else {
        return {}
      }
    },
    paddingemail() {
      if (this.night) {
        return {}
      } else {
        return {}
      }
    },
    aboutmetextdark() {
      if (this.night) {
        return {
          "background": "#403D40",
          "transition": ".3s ease-in-out"

        }
      } else {
        return {}
      }
    },
    projectdark() {
      if (this.night) {
        return {}
      } else {
        return {}
      }
    },
    tldrmedark() {
      if (this.night) {
        return {}
      } else {
        return {}
      }
    }
  }
}
</script>

<style scoped>

.bioContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: CircularStd, sans-serif;
  font-size: 100%;
  width: 90%;
  max-width: 1000px;
  margin: auto;
}

@keyframes h1 {
  from {
    max-width: 0.5rem;
  }
  to {
    max-width: 3rem;
  }
}


.nametitle {
  width: 90%;
  display: inline;
  border-right: min(2em, 8vw) solid orange;
  animation: typing 1.3s steps(21, end),
  blink-caret 0.9s step-end infinite;

  position: relative; /* new */
}

.aboutme {
  display: flex;
  align-content: flex-start;
  height: 25px;
  width: auto;
  padding-left: 8px;
  margin-bottom: 1vh;
  background-color: #e4e3e5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: .3s ease-in-out

}

.tldr {
  padding-left: 7.2vw;
  width: 89%;
  margin-top: 10px;

}

.tldrme {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 90%;
  padding: 2vw;
  justify-content: center;
  margin: auto;
}

.aboutmetext {
  width: 100%;
  height:auto;
  min-height: 40vh;
  margin: auto;
  background: #201E21;
  border-radius: 10px;
  color: #B87324;
  border: 1px solid #4D4D50;
  font-size: 1em !important;
}

.scrolltext {
  overflow: auto;
  max-height: 36vh;
  display: flex;
  flex-direction: column-reverse;
}

::-webkit-scrollbar {
  display: none;
}

.skills {
  background: gray;
}

p {
  color: #6E5BBB;
  font-size: 0.9em;

}

@keyframes typing {
  from {
    width: 0
  }
  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to {
    border-color: transparent
  }
  50% {
    border-color: orange;
  }
}


h1 {
  font-weight: bold;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: .13em;
  font-size: min(6.5vw, 4.7em);
}


h2 {
  font-size: min(4vw, 1.5em);
}

h3 {
  font-size: min(100vw, 1.2em) !important;
  padding-left: 15px;
  padding-right: 15px;
}


h4 {
  font-size: 2em;
  font-weight: bold;
}

.mail {
  display: flex;
  margin-top: 3vh;
  margin-left: 5vw;
  margin-bottom: 3vh;
  justify-content: flex-start;
}

.email-link {
  border: 2px solid black;
  border-radius: 7px;
  padding: 10px;
  color: black;
  text-decoration: underline;
  font-size: 1.3em;

}

#dash {
  display: inline;
  float: left;
  color: red;
}

.project {
  margin-top: 4vw;

  width: auto;
  padding-left: 5vw;
}

.header_bottone_verde {
  background-color: #33c948;
  border: 1px solid #2dbb41;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.header_bottone_red {
  background-color: #f96256;
  border: 1px solid #f65549;
  border-radius: 50%;
  width: 15px;
  height: 15px;
}

.header_bottone_giallo {
  background-color: #fdbc3d;
  border: 1px solid #ffb524;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.header_bottoni {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  justify-content: space-between;
  width: 4em;
  height: 1.5em;
  align-items: center;

}

@keyframes blink-input {
  from, to {
    border-color: transparent
  }
  50% {
    border-color: orange;
  }
}

.digit {
  outline: none;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  background-color: transparent;
  color: #B87324;
  caret-color: orange;
  border-left: 0.6em solid orange;
  width: 90%;
  animation: blink-input 1.5s step-end infinite;
}

#commands_list {
  margin: 0; /* To remove default bottom margin */
  padding: 0; /* To remove default left padding */
}

a {
  color: #348BB4;
}

#listext {
  color: #6E5BBB;
  font-size: 0.9em !important;
}

#commandtext {
  margin: 0; /* To remove default bottom margin */
  padding: 0; /* To remove default left padding */
  font-size: 0.95em !important;
}

#project {
  font-size: min(6vw, 4em);
}
</style>