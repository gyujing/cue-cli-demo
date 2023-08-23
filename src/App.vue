<template>
  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
    <div class="content">
      <div class="left">
        <Left></Left>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import Left from "./components/Left";
export default {
  name: "App",
  components: {
    Header,
    Left,
  },
  mounted: function() {
    // window.addEventListener("beforeunload", () => {
    //   console.log(1);
    //   rules.removeItem("leftRoute");
    // });
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content{
  display: flex;
  height: calc(100vh - 40px);
}
.left{
  width: 200px;
  text-align: left;
  flex: 0 0 20%;
}
.right{
  flex: 0 0 80%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
