<template>
  <div id="app" :style="color_main">
    <navigation @toggle-dark="toggleDarkMode"/>
    <div class="prima">
      <bio/>
    </div>
    <div class="seconda">
    <projects/>
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
          "background": "#332A35"
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
  background: white;
}

.prima{
  padding-top: 280px;
}

.seconda{
  padding-top: 320px;
}
</style>
