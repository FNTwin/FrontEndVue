<template>
  <div class="d-flex align-items-center" id="main">
    <div container landing>
      <div class="landing_bio">
        <div class="titolo">
          <h1>Cristian "FNTwin" Gabellini</h1>
        </div>

        <div class="adia">
          <h2 class="test">
            Computational Material Engineer specialized in multiscale simulations
            and Machine Learning.
          </h2>
        </div>

        <div class="congr">
          <h4>About me!</h4>
        </div>

        <div class="less_important">
          <h3>
            I'm just a guy from Gorizia with a burning passion for the microscopic universe and the computation world.
            Ab-Initio, All-atoms and Coarse-grain simulations!<br>
            On my last year of bachelor's I discovered my love for machine learning
            and I started focusing on its theory and its application in the simulation field.
            At the end of my master I was able to develop a novel machine learning
            approach to optimize a Dissipative Particle Dynamics force field.


          </h3>
        </div>

        <div class="congr">
          <h4>Skills</h4>
        </div>

        <div class="less_important">
          <h3>
            Languages & Frameworks: <p>Python, C++, HTML/CSS, Javascript, Flask, FastAPI, Vue.js</p><br><br>
            Packages: <p>NumPy, SciPy, Pandas, Matplotlib, Tensorflow,
            scikit-learn, OpenCV, MDanalysis</p><br><br>
            Databases: <p>MySQL, MongoDB</p><br><br>
            Miscellaneous: <p>GIT, Unit testing</p><br>
          </h3>
          <h3>
            <br>
            <a class="email-link mt-4" href="mailto:cris.gabellini@gmail.com">cris.gabellini@gmail.com</a>
          </h3>
        </div>

      </div>

    </div>

  </div>
</template>

<script>


export default {
  name: "bio"
}
</script>

<style scoped>
.align-items-center {
  align-items: center;
}
.d-flex {
  display: flex;
}
#main {
  height: 30vh;
  min-height: 500px;
  width: 100%;
  margin: auto;
}
.container {
  width: 100%;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
}

.landing_bio {
  padding-left: 60px;
  margin-left: auto;
  max-width: 800px;
  width: auto;
  margin-right: 20px;
}

.titolo {
  font-size: 20pt;
  font-family: CircularStd,sans-serif;
  font-weight: 30;

}

.congr{
  color:black;
  font-size: 18pt;
  font-family: CircularStd,sans-serif;
  font-weight: 30;
}
.adia{
  color:black;
  font-size: 16pt;
  font-family: CircularStd,sans-serif;
  font-weight: 30;
}

.less_important{
  font-size: 13pt;
  font-family: CircularStd,sans-serif;
  font-weight: 30;
  color: #333234;
}

h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

h2 {
  display: block;
  font-size: 1em;
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

h4 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.email-link {
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;

  margin-left: 0px;
  border: 2px;
  border-radius: 7px!important;
  border: 2px solid #000;
  opacity: 0.6;
  color: #000;
  text-decoration: none;
  transition: .2s ease-out;
  -webkit-transition: .2s ease-out;
}

.email-link:hover{
  border: 2px solid #000;
  opacity: 1;
}

.email-link, .landing-block  p{
  font-weight: 300;

}
.mt-4, .my-4 {
  margin-top: 1.5rem!important;
}

p {
  font-weight: lighter;
  display: inline;

}
</style>