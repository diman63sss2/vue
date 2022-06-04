
<template>
  <Header-app />
  <router-view></router-view>
  <Footer-app />
</template>

<script>
import HeaderApp from "@/components/HeaderApp";
import FooterApp from "@/components/FooterApp";
//import FormsTest from "@/components/FormsTest";
//import CatalogItems from "@/components/CatalogItems";

export default {
  components: {
    HeaderApp,
    FooterApp,
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dn {
  display: none !important;
}

a {
  text-decoration: none;
}

.container {
  width: 1320px;
  margin-left: auto;
  margin-right: auto;
  max-width: 90%;
}
</style>
