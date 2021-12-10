<template>
  <div class="bioContainer">
    <div class="nametitle">
      <h1 id="dash">></h1>
      <h1>{{ nome }}</h1>
    </div>
    <h2 class="tldr">
      Software Engineer with experience in computational material research and
      Machine Learning.<br />
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
          <h3>
            <ul id="commands_list" style="list-style-type: none">
              <li v-for="(item, index) in itmes" :key="index">
                <h3 id="commandtext">> {{ command_array[index] }}</h3>
                <p id="listext" :style="h3dark">{{ cycle_array[index] }}</p>
              </li>
            </ul>
            >
            <input
              type="text"
              v-model="back_nome"
              v-on:keypress.enter="digitazione"
              class="digit"
            />
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
        clear: "",
        "cristian.education":
          '["Bachelor\'s degree in Industrial Engineering", "Master\'s degree in Material Engineering"]',
        "cristian.languages":
          '["Python", "C#", "Fortran", "Delphi", "C++", "HTML/CSS", "Javascript"]',
        "cristian.packages":
          '["Numpy", "SciPy", "scikit-learn", "Pandas", "Matplotlib", "PyTorch", "Tensorflow", "MDanalysis" ,' +
          '"DScribe", "PyTraj"]',
        "cristian.databases": '["MySQL", "MongoDB"]',
        "cristian.various": '["GIT", "HPC", "Bash", "Jupyter", "Unit testing"]',
        "cristian.email": '"cris.gabellini@gmail.com"',
        "cristian.ML":
          '["Gaussian Processes", "Multi Objective Bayesian Optimization", "Gaussian Mixtures",' +
          ' "Deep Learning", "Hierarchical Unsupervised Clustering", "Supervised Learning"]',
        "cristian.location": '"Gorizia (GO), Italy"',
        "cristian.about":
          '"Just a guy with a passion for machine learning and for computational research of nanomaterials.' +
          "I focused my studies on multiscale modelling techniques and all-atoms simulations and I still try to make smart things by combining them with new machine learning approaches.\n" +
          "I'm interested in the use of machine learning to capture and use the molecular local environments based on their molecular fingerprints (SOAP vectors,Parrinello functions, other distributions)",
        "cristian.simulations":
          '["Ab-initio", "All-Atoms", "Coarse-graining DPD and BD", "Umbrella Sampling"]',
        "cristian.interests":
          '["Skateboarding", "Snowboarding", "Cooking", "Brewing", "Programming", "Videogames"]',
        "cristian.simulationSoftwares":
          '["Quantum-espresso", "Amber", "LAMMPS", "GROMACS", "DigiMat"]',
        help:
          "cristian.email,  cristian.ML,  cristian.location," +
          " cristian.about,  cristian.interests,  cristian.simulations,  cristian.simulationSoftwares," +
          " cristian.education,  cristian.languages,  cristian.packages,  cristian.databases,  cristian.various,  clear",
      },
    };
  },
  mounted() {
    this.$root.$on("toggle-dark", this.switch);
    this.name_init(0, this);
    console.log(
      "Welcome on my webpage! Type help in the terminal to see the available commands!"
    );
    this.init("cristian.education");
    this.init("cristian.languages");
    this.init("cristian.ML");
    this.init("cristian.various");
    this.init("help");
  },
  methods: {
    init(nome) {
      this.display_nome = this.options[nome];
      this.add(this.display_nome);
      this.add2(nome);
    },
    switch() {
      this.night = !this.night;
    },
    name_init(index, arg) {
      for (let index = 0; index < arg.nome.length; index++) {
        console.log(arg.display_nome.concat(arg.nome[index]));
        arg.display_nome.concat(arg.nome[index]);
      }
    },
    add(value) {
      this.display_array.push(value);
      this.cycle_array = this.display_array;
    },
    add2(value) {
      this.command_array.push(value);
    },
    clear() {
      this.command_array = [];
      this.cycle_array = [];
      this.display_array = [];
    },
    digitazione() {
      let temp = this.back_nome;
      this.back_nome = "";
      if (temp in this.options) {
        this.display_nome = this.options[temp];
        this.add(this.display_nome);
        this.add2(temp);
        if (temp === "clear") {
          this.clear();
        }
      } else {
        if (temp.replace(/\s/g, "") === "") {
          this.display_nome = "";
        } else {
          this.display_nome = temp + ": command not found";
          this.add(this.display_nome);
          this.add2(temp);
        }
      }
    },
    show(event) {
      this.back_nome = event.target.value;
    },
  },
  computed: {
    itmes() {
      return this.cycle_array;
    },
    color_skills() {
      if (this.night) {
        return {
          background: "black",
        };
      } else {
        return {};
      }
    },
    aboutmedark() {
      if (this.night) {
        return {};
      } else {
        return {};
      }
    },
    h3dark() {
      if (this.night) {
        return {};
      } else {
        return {};
      }
    },
    h4dark() {
      if (this.night) {
        return {};
      } else {
        return {};
      }
    },
    maildark() {
      if (this.night) {
        return {
          background: "#CBBECC",
          transition: ".3s ease-in-out",
        };
      } else {
        return {};
      }
    },
    paddingemail() {
      if (this.night) {
        return {};
      } else {
        return {};
      }
    },
    aboutmetextdark() {
      if (this.night) {
        return {
          background: "#403D40",
          transition: ".3s ease-in-out",
        };
      } else {
        return {};
      }
    },
    projectdark() {
      if (this.night) {
        return {};
      } else {
        return {};
      }
    },
    tldrmedark() {
      if (this.night) {
        return {};
      } else {
        return {};
      }
    },
  },
};
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
  animation: typing 1.3s steps(21, end), blink-caret 0.9s step-end infinite;

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
  transition: 0.3s ease-in-out;
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
  height: auto;
  min-height: 40vh;
  margin: auto;
  background: #201e21;
  border-radius: 10px;
  color: #b87324;
  border: 1px solid #4d4d50;
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
  color: #6e5bbb;
  font-size: 0.9em;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

h1 {
  font-weight: bold;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.13em;
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
  from,
  to {
    border-color: transparent;
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
  color: #b87324;
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
  color: #348bb4;
}

#listext {
  color: #6e5bbb;
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