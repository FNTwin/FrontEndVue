<template>
  <div id="test" class="container_all">
    <!--<div class="container2" :style="this.color_main">-->
    <div class="container2">
      <div class="image_container">
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////// -->
        <button :style="darkproject" class="holder2" @click="showModal12">
          <h1 :style="correctcolor">
            Liquid phase exfoliation of graphite and boron nitride using fluorescent dyes unveiled combining experiments and simulations
          </h1>
          <h2 :style="correctcolor">Python, Bash, Gromacs</h2>
        </button>
        <div class="cont">
          <div class="gp"></div>
          <b-modal
            id="Gl"
            ref="my-modal12"
            :class="modal - content"
            :style="mod"
            modal-class="modalcol"
            hide-backdrop
            hide-footer
            title="Liquid phase exfoliation of graphite and boron nitride using fluorescent dyes unveiled combining experiments and simulations">
            <div class="d-block text-center">
              <h3>
                Study of the deposition and self-assembly of BODIPY molecules on hBN and Graphene monolayers sheets as dispersants for exfoliation processes.
                Deposition and self-assembly simulations for an increasing number of molecules to match the sperimental measures
                and to better understand the self-assembly patterns of the molecules.
                Free Energy Perturbation and Umbrella Sampling techniques used to study the binding free energy of the molecules on the surface.
              </h3>
            </div>
          </b-modal>
        </div>
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////// -->
        <button :style="darkproject" class="holder2" @click="showModal11">
          <h1 :style="correctcolor">
            Spotting Local Environments in Self-Assembled Monolayer-Protected Gold Nanoparticles
          </h1>
          <h2 :style="correctcolor">Python, Bash, Amber</h2>
        </button>
        <div class="cont">
          <div class="gp"></div>
          <b-modal
            id="Gl"
            ref="my-modal11"
            :class="modal - content"
            :style="mod"
            modal-class="modalcol"
            hide-backdrop
            hide-footer
            title="Spotting Local Environments in Self-Assembled Monolayer-Protected Gold Nanoparticles">
            <div class="d-block text-center">
              <h3>
                Machine Learning analysis of the changes in polarity in the
                local environments at the interfaces of different AuNPs. To
                analyze the vast chemical space and compare the different
                environments, long and short range high dimensional molecular
                fingerprints (Smooth Overlaps of Atomic Positions) were paired
                with dimensionality reduction and automatic clustering analysis
                (Gaussian Mixture and BIC). Similarity between the local
                environments was based on linear kernel products and the
                resulting local environments distances were utilized to relate
                on sperimental ESR measures.
                <br />
                <br /><br />Artistic rendering done on Blender.
                <img
                  class="img-rounded"
                  src="@/assets/compressed_file_SOAP.jpg"
                />
              </h3>
            </div>
          </b-modal>
        </div>
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////// -->
        <button :style="darkproject" class="holder2" @click="showModal10">
          <h1 :style="correctcolor">Surface accessibility of AuNPs</h1>
          <h2 :style="correctcolor">Python, Bash, Amber</h2>
        </button>
        <div class="cont">
          <div class="gp"></div>
          <b-modal
            id="Gl"
            ref="my-modal10"
            :class="modal - content"
            :style="mod"
            modal-class="modalcol"
            hide-backdrop
            hide-footer
            title="Surface accessibility of AuNPs"
          >
            <div class="d-block text-center">
              <h3>
                Investigation of the influence of the peripheral bulk of the
                monoloyaer on the solvent accessible area. Umbrella sampling and
                WHAM were used to compute the Potential Of Mean Force of
                different compositions of the monolayer. Spherical Voronoi was
                also used in conjunction with a solvent mapping technique to
                gain knowledge of the roles and spatial distribution of both the
                ligands and the solvent.
                <br /><br /><br />
                Rendering done on Blender.
                <img class="img-rounded" src="@/assets/3NP_GOOD_opt.jpg" />
              </h3>
            </div>
          </b-modal>
        </div>
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////// -->
        <button :style="darkproject" class="holder2" @click="showModal6">
          <h1 :style="correctcolor">Brownian Dynamics Optimization</h1>
          <h2 :style="correctcolor">Python, Fortran, Bash, LAMMPS</h2>
        </button>
        <div class="cont">
          <div class="gp"></div>
          <b-modal
            id="Gl"
            ref="my-modal6"
            :class="modal - content"
            :style="mod"
            modal-class="modalcol"
            hide-backdrop
            hide-footer
            title="Brownian Dynamics Optimization"
          >
            <div class="d-block text-center">
              <h3>
                Multiscale bottom-up optimization of a Polyethylene glycol
                polymer of different numbers of chains for a mesoscale Brownian
                Dynamics force field. The optimization was done with the BayOPT
                framework and exploited different types of structural
                distributions from the atomistic behavior of the polymer;
                different type of scalarization were also conducted to improve
                the result. Multi Objective optimizations on multiple structural
                factors were also done with success.
                <img class="img-rounded" src="@/assets/params.jpg" />
                <img class="img-rounded" src="@/assets/routine.jpg" />
                <img class="img-rounded" src="@/assets/results.jpg" />
              </h3>
            </div>
          </b-modal>
        </div>
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////// -->
        <button :style="darkproject" class="holder2" @click="showModal5">
          <h1 :style="correctcolor">BayOPT</h1>
          <h2 :style="correctcolor">Python</h2>
        </button>
        <div class="cont">
          <div class="gp"></div>
          <b-modal
            id="BayOpt"
            ref="my-modal5"
            :class="modal - content"
            modal-class="modalcol"
            :style="mod"
            hide-backdrop
            hide-footer
            title="BayOPT"
          >
            <div class="d-block text-center">
              <h3>
                Multi Objective Bayesian Optimization framework based on the
                GPGO framework. It features a Genetic solver to allow the
                optimization of high dimensional functions by using a Particle
                Swarm Optimization on either one of the Acquisition functions of
                the frameworks or the mean function of the Gaussian Process. It
                also features an implementation of a genetic multi objective
                solver NSGAII, used both inside the bayesian optimization
                routine for approximating the Pareto front of the Acquisition
                function and as a standalone solver.

                <img
                  class="img-rounded"
                  src="@/assets/pareto.png"
                  width="70%"
                />
              </h3>
            </div>
          </b-modal>
        </div>
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////// -->
        <button :style="darkproject" class="holder2" @click="showModal2">
          <h1 :style="correctcolor">
            Dissipative Particle Dynamics Optimization
          </h1>
          <h2 :style="correctcolor">Python, Fortran, Bash, Amber, LAMMPS</h2>
        </button>
        <div class="cont">
          <div class="centrare">
            <b-modal
              id="N16modal modal-content modal-body modal-header"
              ref="my-modal2"
              :class="modal - content"
              modal-class="modalcol"
              hide-backdrop
              hide-footer
              title="Dissipative Particle Dynamics Optimization"
            >
              <div class="d-block text-center">
                <h3>
                  Derivation of the DPD interaction parameters for a
                  coarse-grained simulation of a nanoparticle grafted by
                  polymers by using a novel bayesian optimization approach
                  exploiting structural insights from atomistic simulations.
                  <br /><br />
                </h3>
                <img class="img-rounded" src="@/assets/aa_rdf.png" />
                <img class="img-rounded" src="@/assets/N16_BS1.png" />
                <img class="img-rounded" src="@/assets/file/ch_system.png" />
                <img class="img-rounded" src="@/assets/n16gif.gif" />
                <img class="img-rounded" src="@/assets/file/N16b.png" />
              </div>
            </b-modal>
          </div>
        </div>
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////// -->
        <button :style="darkproject" class="holder2" @click="showModal">
          <h1 :style="correctcolor">GPGO</h1>
          <h2 :style="correctcolor">Python</h2>
        </button>
        <div class="cont">
          <div class="gp"></div>
          <b-modal
            id="GPGOmodal"
            ref="my-modal"
            :class="modal - content"
            modal-class="modalcol"
            :style="mod"
            hide-backdrop
            hide-footer
            title="GPGO"
          >
            <div class="d-block text-center">
              <h3>
                Bayesian Optimization framework based on Gaussian processes.
                Hyperparameters tuned by kernel's gradient information and
                numerical solvers. Implementation of various acquisition
                functions and different numerical solvers to achieve a
                convergence on high dimensional problems.
              </h3>
              <img class="img-rounded" src="@/assets/gp.png" width="100%" />
              <img
                class="img-rounded"
                src="@/assets/gold_2_mean.png"
                width="100%"
              />
              <img class="img-rounded" src="@/assets/bay.png" width="70%" />
            </div>
          </b-modal>
        </div>
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////// -->
        <button :style="darkproject" class="holder2" @click="showModal3">
          <h1 :style="correctcolor">
            Classification of defects on hot-rolled steel
          </h1>
          <h2 :style="correctcolor">Python, Jupyter</h2>
        </button>
        <div class="cont">
          <b-modal
            id="Defectsmodal"
            ref="my-modal3"
            :class="modal - content"
            modal-class="modalcol"
            hide-backdrop
            hide-footer
            title="Classification of defects on hot-rolled steel"
          >
            <div class="d-block text-center">
              <h3>
                Implementation in Tensorflow of various types of CNNs to
                classify images of surface defects on hot-rolled steel. High
                accuracy was achieved by cross-validating the hyperparameters
                and topology of the tested nets. Different topologies and
                hyperparameters were also studied to improve the accuracy.
                <br /><br />
              </h3>
              <img
                class="img-rounded"
                src="@/assets/file/defects.png"
                width="100%"
              />
            </div>
          </b-modal>
        </div>
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////// -->
        <button :style="darkproject" class="holder2" @click="showModal4">
          <h1 :style="correctcolor">GANs</h1>
          <h2 :style="correctcolor">Python, Jupyter</h2>
        </button>
        <div class="cont">
          <b-modal
            ref="my-modal4"
            id="testet"
            :class="modal - content"
            modal-class="modalcol"
            hide-backdrop
            hide-footer
            title="GANs"
          >
            <div class="d-block text-center">
              <h3>
                Implementation and training in Pytorch of a Generative
                Adversarial Network and a Conditional Generative Adversial
                Network on the standard MNIST dataset. The CGAN implementation
                was done to improve the latent space of the GAN.

                <img class="img-rounded" src="@/assets/g1.jpg" width="100%" />
                <br /><br />
              </h3>
            </div>
          </b-modal>
        </div>
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////// -->
        <button :style="darkproject" class="holder2" @click="showModal7">
          <h1 :style="correctcolor">cristiangabellini.com</h1>
          <h2 :style="correctcolor">Python Javascript, Vue.js, FastAPI, HTML/CSS, Netlify, Heroku</h2>
        </button>
        <div class="cont">
          <b-modal
            ref="my-modal7"
            id="testet"
            :class="modal - content"
            modal-class="modalcol"
            hide-backdrop
            hide-footer
            title="cristiangabellini.com"
          >
            <div class="d-block text-center">
              <h3>
                This project is just the implementation of my homepage...aka
                this site!<br />
                Not a lot to say here! I just did it from scratch to learn a bit
                about javascript and vuejs with a nodejs backend deployed on Netlify.<br />
                REST APis done with Python and FastAPI and deployed on Heroku.<br />
                <br /><br />
              </h3>
            </div>
          </b-modal>
        </div>
      </div>
    </div>
<!--     <div class="API">
      <div class="titleexp">
        <h1 :style="correctcolor">Interactive stuff.</h1>
      </div>
      <similarity />
    </div> -->
  </div>
</template>

<script>
// import similarity from "@/components/similarity.vue";

export default {
  name: "projects",
  components: {
    // similarity,
  },
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
    showModal() {
      this.$refs["my-modal"].show();
    },
    showModal2() {
      this.$refs["my-modal2"].show();
    },
    showModal3() {
      this.$refs["my-modal3"].show();
    },
    showModal4() {
      this.$refs["my-modal4"].show();
    },
    showModal5() {
      this.$refs["my-modal5"].show();
    },
    showModal6() {
      this.$refs["my-modal6"].show();
    },
    showModal7() {
      this.$refs["my-modal7"].show();
    },
    showModal8() {
      this.$refs["my-modal8"].show();
    },
    showModal9() {
      this.$refs["my-modal9"].show();
    },
    showModal10() {
      this.$refs["my-modal10"].show();
    },
    showModal11() {
      this.$refs["my-modal11"].show();
    },
    showModal12() {
      this.$refs["my-modal12"].show();
    },
    switch() {
      this.night = !this.night;
    },
  },
  computed: {
    darkproject() {
      if (this.night) {
        return {
          /* background: "#403D40", */
          background: "rgba(64, 61, 64, 0.5)",
          /*  "box-shadow": "0.2em 0.1em 0 0 #1F0934", */
          transition: ".3s ease-in-out",
        };
      } else {
        return {};
      }
    },
    darktext() {
      if (this.night) {
        return {
          background: "#403D40",
          "box-shadow": "0.2em 0.1em 0 0 #1F0934",
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
          transition: ".3s ease-in-out",
        };
      } else {
        return {};
      }
    },
  },
};
</script>

<style scoped>
:root {
  --border: rgb(3, 169, 244);
  
  --g1: rgb(98, 0, 234);
  --g2: rgb(236, 64, 122);
  --g3: rgb(253, 216, 53);
}

.container2 {
  max-width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  height: auto;
  transition: 0.3s ease-in-out;
}

.image_container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 5%;
  width: 90%;
  height: 90%;
  max-width: 1500px;
}

.holder2 {
  display: flex !important;
  /* background: #d9d7d3; */
  /*   background: transparent; */
  /* box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2); */

  /* background-image: linear-gradient(
    130deg, 
    transparent 0% 13%, 
     rgb(98, 0, 234),
     rgb(236, 64, 122),
     rgb(253, 216, 53)
  ); */
  background-image:  #c3c0c9 ;

  transition: 0.1s;
  width: 60%;
  height: 100%;

  border-radius: 2px;
  border-color: black;
  margin: auto;
  margin-bottom: 1.6vh;

  border-width: 3px;
  line-height: 1.75em;
  border-bottom: 3px solid;
  border-right: 12px solid;
  border-image:  linear-gradient(360deg, #743ad5 0%, #d53a9d 100%);
  border-image-slice: 1;
  border-left: 0px solid;
  border-top: 0px solid;

  counter-increment: section;
  position: relative;

  flex-direction: column;
}

.holder2:hover {
  transition: 0.3s;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  opacity: 1;
  transform: translateY(0%);
  transition: opacity 0ms, transform 200ms cubic-bezier(.90, .06, .15, .90);
}

/deep/ .modalcol > .modal-dialog > .modal-content > .modal-header {
  background: linear-gradient(to right, #743ad5 0%, #d53a9d 100%);
  color: white;
}

/* /deep/ .modalcol > .modal-dialog > .modal-content {
  background:#201F20 ;
} */

.img-rounded {
  display: flex;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  align-self: center;
  padding-top: 30px;
}

.explanation {
  font-size: 12pt;
  font-weight: 30;
  color: #333234;
}

h1 {
  display: block;
  font-size: min(3.5vw, 2em);
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-left: 1vw;
  margin-top: auto;
  font-weight: bold;
  color: #252225;
  font-family: CircularStd, sans-serif !important;
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
  font-size: 1em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: normal;
}

.API {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  margin: auto;
}

.titleexp {
  display: flex !important;
  margin: auto;
  align-content: center;
  justify-content: center;
}

.titleexp h1 {
  font-weight: bold;
  letter-spacing: 0.13em;
  font-size: min(6.5vw, 4.7em);
}


</style>