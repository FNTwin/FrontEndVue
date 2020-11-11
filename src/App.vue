<template>
  <div id="app" :style="color_main">
    <vue-headful title="Cristian Gabellini Homepage"
                 description="Personal site of Cristian Gabellini" />
    <div class="container_princ">
      <navigation @toggle-dark="toggleDarkMode"/>
      <div class="prima">
        <bio/>
      </div>
      <div class="seconda">
        <projects/>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "@/components/navigation";
import bio from "@/components/bio";
import projects from "@/components/projects";

export default {
  name: 'App',
  data(){
    return{
      isDarkMode: false
    }
  },
  components: {
    navigation,
    bio,
    projects
  },
  methods: {
    toggleDarkMode(){
      this.isDarkMode = !this.isDarkMode
    }
  },
  computed:{
    color_main(){
      if (this.isDarkMode){
        return {
          "background": "#201F20",
          "color": "#A6A4A6",
          "transition": ".3s ease-out"
        };
      } else{
        return {}
      }
    }
  }
}
</script>

<style>
#app {
  font-family: CircularStd,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #252225;
  margin-top: 60px;
  background: #F2EFEB;

}

.container_princ{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.prima{
  padding-top: 6vh;
}

.seconda{
  padding-top: auto;
}
</style>
