<template>
  <div id="test" class="container_all">
    <div class="titleexp">
      <h1>My experience.</h1>
    </div>
    <div class="container2">
      <div class="image_container">
        <maintime>
          <div class="changecolortxt" :style="darktxt">
            <p v-for="jobs in jobarray" :key="jobs.job">
              <strong>{{ jobs.job }} || {{ jobs.place }}</strong> <br>
              {{ jobs.date }} <br>
              <small>{{ jobs.longexplanation }}</small>

                <ol><li v-for="element in jobs.explanation" :key="element">
                  <small>{{element}}</small>
                </li></ol>      
            </p>
          </div>
        </maintime>
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
      jobarray: [
          {
          job: "Associate Scientist",
          date: "05/2023 - Now",
          place: "Valence Labs",
          longexplanation:  "Following the acquisition of Valence Discovery by Recursion, Valence Labs continues as a semi-autonomous R&D engine with a mission of harnessing computation to radically improve lives.",
          explanation: [
          ],
        },
        {
          job: "Application Scientist, Computational Chemistry",
          date: "08/2022 - 05/2023",
          place: "Valence Labs",
          longexplanation: "Valence Discovery was a biotechnology company built on advances in deep learning. Valence was spun out of Mila, the world's largest deep learning research institute, before being acquired by Recursion Pharmaceutical (NASDAQ: RXRX) in May 2023.",
          explanation: [
              "Developing infrastructure features to support internal Machine Learning models",
              "Planning medium and long-term evolution of the platform infrastruc- ture using Machine Learning models",
              "Supporting custom and existing implementation of new Machine Learning methods",
              "Designing and implementing hands-on a fine-grained infrastructure security policy",
              "Designing and implementing hands-on a platform-wide monitoring strategy",
              "Assisting and supporting end-users",
              "Drug metabolism and pharmacokinetics (DMPK) prediction with state-of-the-art Graph Neural Network Models",
              "Free energy molecular dynamics calculation on protein-ligand complexes ",
              "Structure-based approaches for Drug Discovery in low data regime via state-of-the-art physical fingerprints (SOAP, ACE)",
              "Equivariant Machine Learning Interaction Potentials from Quantum Mechanical calculations",
              "Chemistry focused Large Language Models",
          ],
        },
        {
          job: "Software Engineer",
          date: "10/2021 - 04/2022",
          place: "SMS Group, R&D Modeling & Digitalization",
          longexplanation: "",
          explanation: [
            "Signal processing and modeling of a bayesian exponential degradation model for the predictive maintenance of bearing machinery",
            "Development of machine learning models for EAF maintenance",
            "Time-Series forecasting using Theta, ARIMA and LSTM models",
            "Correlation analysis and models for EAF and CCM data",
            "Development and implementation of finite element thermoelastic linear models for continuos casting",
            "Development and deployment of custom grafana interfaces"
          ],
        },
        {
          job: "Researcher",
          date: "01/2021 - 05/2022",
          place: "University of Trieste (UNITS)",
          longexplanation: "",
          explanation: [
          "Created BayGPGO: aframework to perform multi-objective optimization of Coarse-Grainded force fields by using bayesian optimization on gaussian process regression model",
          "Investigation of the influence of the peripheral bulk of the monolayer on the solvent accessible area by Umbrella Sampling, Voronoi Tassellation and other more techniques",
          "Developed and implemented routines to model AuNPs by correctly simulating the pKa-influenced behaviour in explicit solvents. Replica Exchange used to improve the Monte-Carlo protonation",
          "Created machine learning approaches to analyze and predict the similarity between local environments of different AuNPs by exploiting SOAP fingerprints, dimensionality reduction (PCA), Gaussian Mixtures clustering, kernels product and ESR measurements",
          "Development of computational models of a variety of SAM-AuNPs via the integration of many technique (QM, MD and CG dynamics)",
          "Free energy calculations via Umbrella sampling and Free energy perturbation",
          "Self-Assembly of molecules on h-BN/Graphene monolayer and binding free energy investigation by FEP"
          ],
        },
        {
          job: "Researcher",
          date: "02/2020 - 05/2020",
          place: "University of Jan Evangelista (UJEP)",
          longexplanation: "",
          explanation: [
            "Researched machine learning models (DL and other supervised regression models) used for nanomaterials simulations",
            "Designed and implemented machine learning approaches to coarse-grain water solvents",
            "Implemented  different  atomistic  and  coarse-grained  simulations  to  build  datasets  for  testing different machine learning approaches",
          ],
        },
        {
          job: "Technical system engineer - Internship",
          date: "09/2019 - 12/2019",
          place: "Fincantieri S.p.A.",
          longexplanation: "",
          explanation: [
            "Designed and implemented the automatic creation of complex 2D and 3D objects from tabular data by using parametric modeling",
            "Developed  new  internal  procedures  to  to decrease man-hours on modeling",
          ],
        },
      ],
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
    darktxt() {
      if (this.night) {
        return {
          color: "#A6A4A6",
        };
      } else {
        return {};
      }
    },
    correctcolor() {
      if (this.night) {
        return {
          color: "#A6A4A6",
          transition: ".3s ease-in-out",
        };
      } else {
        return {};
      }
    },
    darkcircle() {
      if (this.night) {
        return {
          border: "2px solid #8F3E8F",
          transition: ".3s ease-in-out",
        };
      } else {
        return {};
      }
    },
    darkact() {
      if (this.night) {
        return {
          border: "2px solid #8F3E8F",
          background: "#A6A4A6",
          transition: ".3s ease-in-out",
        };
      } else {
        return {};
      }
    },
    darkline() {
      if (this.night) {
        return {
          "border-left": "2px solid #8F3E8F",
          transition: ".3s ease-in-out",
        };
      } else {
        return {};
      }
    },
    mod() {
      if (this.night) {
        return {
          background: "#403D40",
        };
      } else {
        return {};
      }
    },
    dataplot() {
      return this.test;
    },
    color_main() {
      if (this.night) {
        return {
          background: "#201F20",
          color: "#A6A4A6",
        };
      } else {
        return {};
      }
    },
  },
};
</script>

<style scoped>
.container2 {
  max-width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  height: auto;
  z-index: 999;
}

.image_container {
  display: flex;
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
  background: #d9d7d3;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  transition: 0.1s;
  width: 90%;
  height: 30%;
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
  background: #403d40;
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

.timeline {
  display: flex !important;
  justify-content: flex-end;
  flex-direction: column;
  width: 20%;
  height: 36vh;
}
.jobs {
  width: 60%;
  height: 36vh;
}

.titleexp {
  display: flex !important;
  margin: auto;
  align-content: center;
  justify-content: center;
  z-index: 999;
}

h1 {
  font-weight: bold;
  letter-spacing: 0.13em;
  font-size: min(6.5vw, 4.7em);
}

.headerjob {
  font-size: min(2vw, 1.5em);
  letter-spacing: 0.05em;
  padding-left: 4px;
  padding-top: 2px;
  margin-top: 7px;

}

h1 {
  text-align: justify;
  white-space: nowrap;
}

h2 {
  display: block;
  font-size: min(2vw, 1.2em);

  margin-left: 1vw;
  font-weight: bold;
  color: #252225;
  font-family: CircularStd, sans-serif !important;
  font-style: italic;
}

h3 {
  display: block;
  font-size: min(1vh, 2.2vw);
  text-align: justify;
  font-weight: normal;
  padding-left: 4px;
  line-height: 1.1em;
  padding-right: 4px;
}

html {
  font-size: 14px;
}
body {
  background: #f6f9fc;
  font-family: "Open Sans", sans-serif;
  color: #525f7f;
}
h2 {
  margin: 5%;
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
}

maintime {
  min-width: 300px;
  max-width: 600px;
  margin: auto;
}
.changecolortxt {
  transition: 0.1s;
  color: #252225;
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
  font-size: 20px;
}

p:nth-child(odd) {
  border-right: 3px solid;
  padding-left: 0;
}

p:nth-child(even) {
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
  list-style-type: disc;
  margin: 0px;
  padding: 0px;
}
</style>