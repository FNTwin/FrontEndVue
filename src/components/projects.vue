<template>
  <div class="container_all" id="test">
    <!--<div class="container2" :style="this.color_main">-->
    <div class="container2">
      <div class="image_container">
        <div :style="darkproject" class="holder2">
          <img alt="N16" class="img-rounded" src="@/assets/n16.png" @click="showModal2">
          <div class="cont">
            <div class="centrare">
              <b-modal id="N16modal modal-content modal-body modal-header"
                       ref="my-modal2"
                       :class="modal-content"
                       hide-backdrop hide-footer
                       title="Dissipative Particle Dynamics Optimization">
                <div class="d-block text-center">
                  <h3>Derivation of the DPD interaction parameters
                    for a coarse-grained simulation of a nanoparticle grafted by polymers by using a novel
                    bayesian optimization approach exploiting
                    structural insights from atomistic simulations.
                    <br><br></h3>
                  <img class="img-rounded" src="@/assets/n16gif.gif">
                  <img class="img-rounded" src="@/assets/aa_rdf.png">
                  <img class="img-rounded" src="@/assets/N16_BS1.png">
                  <img class="img-rounded" src="@/assets/file/ch_system.png">
                  <img class="img-rounded" src="@/assets/file/N16b.png">
                </div>
              </b-modal>
            </div>
          </div>
        </div>
        <div :style="darkproject" class="holder2">
          <img alt="Defects" class="img-rounded"
               src="@/assets/file/defects.png" @click="showModal3">
          <div class="cont">
            <b-modal id="Defectsmodal" ref="my-modal3" :class="modal-content"
                     hide-backdrop hide-footer title="Classification of defects on hot-rolled steel">
              <div class="d-block text-center">
                <h3> Developed a CNN with Tensorflow to detect and classify
                  images of surface defects on hot-rolled steel.
                  Different topologies and hyperparameters were studied
                  to improve the accuracy of the NN.
                  <br><br></h3>
                <img class="img-rounded" src="@/assets/file/defects.png" width="100%">
              </div>
            </b-modal>
          </div>
        </div>
        <div :style="darkproject" class="holder2">
          <img alt="Gaussian Process" class="img-rounded"
               src="@/assets/gp.png" @click="showModal">
          <div class="cont">
            <div class="gp">
            </div>
            <b-modal id="GPGOmodal" ref="my-modal"
                     :class="modal-content"
                     hide-backdrop hide-footer title="GPGO" :style="mod">
              <div class="d-block text-center">
                <h3> Bayesian Optimization framework based on Gaussian processes.
                  Hyperparameters tuned by kernel's gradient information and numerical
                  solvers. Implementation of various acquisition
                  functions and different numerical solvers to achieve a
                  convergence on high dimensional problems.
                </h3>
                <img class="img-rounded" src="@/assets/gp.png" width="100%">
                <img class="img-rounded" src="@/assets/gold_2_mean.png" width="100%">
                <img class="img-rounded" src="@/assets/bay.png" width="70%">
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
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
    showModal() {
      this.$refs['my-modal'].show()
    },
    showModal2() {
      this.$refs['my-modal2'].show()
    },
    showModal3() {
      this.$refs['my-modal3'].show()
    },
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
          "transition": ".3s ease-in-out"

        };
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
          "transition": ".3s ease-in-out"
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
  transition: .3s ease-in-out;
}

.image_container {
  display: flex;
  flex-direction: row;
  padding-bottom: 5%;
  width: 90%;
  height: 90%;
  max-width: 1500px;
}


.holder2 {
  display: flex !important;
  background: #D9D7D3;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  transition: 0.1s;
  width: 26vw;
  height: 26vw;
  max-width: 460px;
  max-height: 460px;
  border: 1.5px solid black;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  align-content: center;
  border-radius: 10px;
  margin: auto;

}

.holder2:hover {
  opacity: 0.6;
  transition: 0.3s;
}

.img-rounded {
  display: flex;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  align-self: center;
}

.explanation {
  font-size: 12pt;
  font-family: CircularStd, sans-serif;
  font-weight: 30;
  color: #333234;
}

h1 {
  display: block;
  text-decoration: underline;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-left: 2vw;
  font-weight: bold;
}

h3 {
  display: block;
  font-size: 1em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}


</style>