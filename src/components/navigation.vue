<template>
  <div class="container_navbar" id ="navigation">
    <nav class="navbar navbar-expand-lg fixed-top primary-nav container">
      <a aria-current="page" class="btn btn-layered offset square" role="button" href="/" style="text-decoration:none;">FNTwin</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav align-items-center ml-auto">
          <a class="btn btn-layered offset square" role="button" href="https://github.com/FNTwin" style="text-decoration:none;" target="__blank" >Github</a>
        </div>
        <a :href="`${publicPath}CG_Resume.pdf`" class="btn btn-layered offset square" role="button" aria-pressed="true" style="text-decoration:none;" download>CV</a>
        <a href="mailto:cris.gabellini@gmail.com" class="btn btn-layered offset square" role="button" aria-pressed="true" style="text-decoration:none;">Email me</a>
      </div>
    </nav>
  </div>
</template>

<script>


export default {
  name: 'navigation_bar',
  data: () => ({ publicPath: process.env.BASE_URL })
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}

.navbar-expand-lg .navbar-collapse {
  display: flex!important;
  flex-basis: auto;
  position: sticky;
}
.collapse:not(.show) {
  display: none;
}
.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

#navigation {
  border-bottom: 1px solid #000;
  background-color: #fff;
  z-index: 700;
  position: sticky;
}
.fixed-bottom, .fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
.fixed-top {
  top: 0;
}
*, :after, :before {
  box-sizing: border-box;
}

div {
  display: block;
}

.primary-nav {
  font-family: CircularStd,sans-serif;
  font-weight: 700;
}

.square {
  opacity: 0.1;
  border-radius: 5px!important;
}
.square:hover{
  opacity: 1;
}
.offset {
  box-shadow: 0.4em 0.3em 0 0 #1F0934;
}
.btn-layered {
  background: white;
  border: 2px solid #1F0934;
  font-family: CircularStd,sans-serif!important;
  font-size: 10pt;
  font-weight: 500;
  line-height: 1;
  padding: 10px 10px;
  transition: .1s ease-out;
  -webkit-transition: .1s ease-out;
  color: #1F0934;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #1F0934;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
}

a {
  margin-left: 10px;
  color: #1F0934;
  text-decoration: none;
  background-color: transparent;
}

a:link{
  text-decoration: none;
}

*, :after, :before {
  box-sizing: border-box;
}

a:-webkit-any-link {
  color: #2B282D;
  cursor: pointer;
  text-decoration: underline;
}

</style>
