<template>
  <div id="app">
    <navigation/>
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
  components: {
    navigation,
    bio,
    projects
  }
}
</script>

<style>
#app {
  font-family: CircularStd,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #262525;
  margin-top: 60px;
}

.prima{
  padding-top: 280px;
}

.seconda{
  padding-top: 320px;
}
</style>
