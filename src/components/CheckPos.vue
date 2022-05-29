<template>
  <div>
    <Header-app />
    <Forms-test />
    <Catalog-items />
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";
import FormsTest from "@/components/FormsTest";
import CatalogItems from "@/components/CatalogItems";

export default {
  components: {
    HeaderApp,
    FormsTest,
    CatalogItems,
  }

};
</script>

<style>
</style>