<template>
  <div class="container_all">

    <div class="image_container">

      <div class="holder2" :style="darkproject">
      <img src="@/assets/n16.png" @click="showModal2" class="img-rounded" alt="N16" >
        <div class="cont">
        <b-modal ref="my-modal2" id="N16modal" hide-footer hide-backdrop  title="Dissipative Particle Dynamics Optimization
" class="dark fade modal-title text-center modal-body modal-header" >
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

    <div class="holder2" :style="darkproject" >
      <div class="cont">
        <div class="centrare">
      <img src="@/assets/file/defects.png" @click="showModal3" class="img-rounded" alt="Defects" >
        </div>
      <b-modal  ref="my-modal3" id="Defectsmodal" hide-footer hide-backdrop title="Classification of defects on hot-rolled steel" class="defc">
        <div class="explanation d-block text-center modal-body modal-header">
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


    <div class="holder2" :style="darkproject">
      <div class="cont">
        <div class="gp">
      <img src="@/assets/gp.png" @click="showModal" class="img-rounded" alt="Gaussian Process" >
        </div>
      <b-modal ref="my-modal" id="GPGOmodal" hide-footer hide-backdrop title="GPGO" class="gpm">
        <div class="explanation d-block text-center modal-body modal-header">
          <h3> Bayesian Optimization framework based on Gaussian processes.
            Hyperparameters tuned by kernel's gradient information and numerical
            solvers. Implementation of various acquisition
            functions and different numerical solvers to achieve a
            convergence on high dimensional problems.
          </h3>
          <img src="@/assets/gp.png"  class="img-rounded" width="100%">
          <img src="@/assets/gold_2_mean.png"  class="img-rounded" width="100%">
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
  data(){
    return {
      publicPath: process.env.BASE_URL,
      night: false
    }
  },
  mounted(){
    this.$root.$on("toggle-dark" , this.switch);
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
    },
  },
  computed:{
    darkproject(){
      if (this.night){
        return {
          "background": "#403D40",
          "box-shadow": "0.2em 0.1em 0 0 #1F0934"

        };
      } else{
        return {}
      }
    },
    mod(){
      if (this.night){
        return {
          "background": "#403D40"

        };
      } else{
        return {}
      }
    }

  }
}
</script>

<style scoped>

.image_container{
  display: flex;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  margin-bottom: 4vw;
}

.img-rounded {
  display: flex;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  padding-top: 1.8vw;

  height: auto;
  align-self: center;
}

.holder2 {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.1s;
  width: 30vw;
  border: 2px solid black;
  position: relative;
  margin:auto;
  height: 30vw;
  border-radius: 10px;

}

.holder2:hover{
  opacity: 0.6;
  transition: 0.3s;
}
.explanation{
  font-size: 12pt;
  font-family: CircularStd,sans-serif;
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

.gp{
  padding-top: 5vw;
}

.modal-header{
  background: white;
  border-bottom: 2px solid black;
}


.modal-body{
  background: white;
}
</style>