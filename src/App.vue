<template>
  <div id="app" :style="color_main">
    <vue-headful title="Cristian Gabellini Homepage"
                 description="Personal site of Cristian Gabellini"/>


    <div class="container_princ">
      <navigation @toggle-dark="toggleDarkMode"/>
      <div class="prima">
        <vue-particles color="#000000"
                       :particleOpacity="0.7"
                       :particlesNumber="90"
                       shapeType="circle"
                       :particleSize="4"
                       linesColor="#000000"
                       :linesWidth="1"
                       :lineLinked="true"
                       :lineOpacity="0.4"
                       :linesDistance="150"
                       :moveSpeed="0.7"
                       :hoverEffect="true"
                       hoverMode="grab"
                       :clickEffect="true"
                       clickMode="push" v-if="!this.isDarkMode"></vue-particles>

        <vue-particles color="#B87324"
                       :particleOpacity="0.7"
                       :particlesNumber="90"
                       shapeType="circle"
                       :particleSize="4"
                       linesColor="#B87324"
                       :linesWidth="1"
                       :lineLinked="true"
                       :lineOpacity="0.4"
                       :linesDistance="150"
                       :moveSpeed="0.7"
                       :hoverEffect="true"
                       hoverMode="grab"
                       :clickEffect="true"
                       :key="componentKey"
                       clickMode="push" v-if="this.isDarkMode"></vue-particles>
        <bio/>
        <projects/>

        <jobs/>

        <papers/>

      </div>
    </div>

  </div>
</template>

<script>
import navigation from "@/components/navigation";
import bio from "@/components/bio";
import projects from "@/components/projects";
import jobs from "@/components/jobs";
import papers from "@/components/papers"


export default {
  name: 'App',
  data() {
    return {
      isDarkMode: false,
      componentKey: 0
    };
  },
  components: {
    navigation,
    bio,
    projects,
    jobs,
    papers
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
    },
    forceRender(){
      this.componentKey +=1
    }
  },
  computed: {
    color_main() {
      if (this.isDarkMode) {
        return {
          "background": "#201F20",
          "color": "#A6A4A6",
          "transition": ".3s ease-in-out"
        };
      } else {
        return {}
      }
    },
    test(){
      return{
        "color":"#ff9999"
      }
    }
  }
}
</script>

<style>

#app {
  font-family: CircularStd, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #252225;
  margin-top: 60px;
  background: #F2EFEB;
  /*background-image: url("../src/assets/triangles_light.png");*/
  transition: .3s ease-in-out;

}

.container_princ {
  padding-top: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;

}

.prima {
  padding-top: 4vh;
}

#particles-js {
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}
</style>
