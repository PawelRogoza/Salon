<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
</script>

<style>
#toolbarWrapper {
  display: flex;
  justify-content: center;
}
#titleWrapper {
  text-align: center;
  margin: 30px 5px 5px;
}
</style>