<template>
  <div class="container_all">
    <h1>
      Some of my projects.
    </h1>
    <div class="image_container">

      <div class="holder2">
      <img src="@/assets/n16.png" @click="showModal2" class="img-rounded" alt="N16" >
        <div class="cont">
        <b-modal ref="my-modal2" id="N16modal" hide-footer hide-backdrop  title="Dissipative Particle Dynamics Optimization
" class="fade modal-title text-center">
        <div class="d-block text-center">
          <h3>Derivation of the DPD interaction parameters
            for a coarse-grained simulation of a nanoparticle grafted by polymers by using a novel
            bayesian optimization approach exploiting
            structural insights from atomistic simulations.
            <br><br></h3>
            <img src="@/assets/n16gif.gif"  class="img-rounded">
          <img src="@/assets/aa_rdf.png"  class="img-rounded">
            <img src="@/assets/N16_BS1.png"  class="img-rounded">
            <img src="@/assets/file/ch_system.png"  class="img-rounded">
            <img src="@/assets/file/N16b.png"  class="img-rounded" >


        </div>
      </b-modal>
    </div></div>

    <div class="holder2">
      <div class="cont">
      <img src="@/assets/file/defects.png" @click="showModal3" class="img-rounded" alt="Defects" >
      <b-modal ref="my-modal3" id="Defectsmodal" hide-footer hide-backdrop title="Classification of defects on hot-rolled steel" class="defc">
        <div class="explanation d-block text-center">
          <h3> Developed a CNN with Tensorflow to detect and classify
            images of surface defects on hot-rolled steel.
            Different topologies and hyperparameters were studied
            to improve the accuracy of the NN.
            <br><br>
            </h3>
          <img src="@/assets/file/defects.png"  class="img-rounded" width="100%">
        </div>
      </b-modal>
    </div></div>


    <div class="holder2">
      <div class="cont">
      <img src="@/assets/gp.png" @click="showModal" class="img-rounded" alt="Gaussian Process" >
      <b-modal ref="my-modal" id="GPGOmodal" hide-footer hide-backdrop title="GPGO" class="gpm">
        <div class="explanation d-block text-center">
          <h3> Bayesian Optimization framework based on Gaussian processes.
            Hyperparameters tuned by kernel's gradient information and numerical
            solvers. Implementation of various acquisition
            functions and different numerical solvers to achieve a
            convergence on high dimensional problems.
          </h3>
          <img src="@/assets/gold_2_mean.png"  class="img-rounded" width="70%">
          <img src="@/assets/bay.png"  class="img-rounded" width="70%">
        </div>
      </b-modal>
    </div></div>

    </div>

  </div>

</template>

<script>

export default {
  name: "projects",
  data: () => ({ publicPath: process.env.BASE_URL }),
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    showModal2() {
      this.$refs['my-modal2'].show()
    },
    showModal3() {
      this.$refs['my-modal3'].show()
    }

  }
}
</script>

<style scoped>

.container_all{
  margin-left: 100px;
  margin-right:100px
}
.image_container{
  display: flex;
  height: auto;
  align-content: center;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  margin-left: 100px;
  margin-right:100px
}

.img-rounded {
  background: transparent;
  display: block;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  max-width: 90%;
  height: auto;
}

.img-rounded:hover{
  opacity: 0.6;
  transition: 0.3s;
}


.holder2 {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding-top: 10px;
  width: 60%;
  border: 2px;
  position: relative;
  margin:auto;
  width: 100px;
  height: 100px;

}
.holder3 {
  padding-top: 50px;
  width: 60%;
  border: 2px;
  position: relative;
  margin:auto;

}
.explanation{
  font-size: 12pt;
  font-family: CircularStd,sans-serif;
  font-weight: 30;
  color: #333234;
}

.holder{
  padding-top: 50px;
}

h1 {
  display: block;
  text-decoration: underline;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
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

.holder2::after {
  content:'';
  position: absolute;
  z-index:-1;
  bottom:-10px;
  left:2px;
  width:100%;
  height:100%;
  border-radius: 9px!important;
  background: #E6E1EA;
  opacity: 0.3;
}

.holder3::after {
  content:'';
  position: absolute;
  z-index:-1;
  bottom:-25px;
  left:-1px;
  width:100%;
  height:100%;
  border-radius: 9px!important;
  background: #E6E1EA;
  opacity: 0.3;
}

.cont {
  padding: 2px 16px;
}
</style>