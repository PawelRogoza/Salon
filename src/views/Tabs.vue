<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon size="large" src="../assets/icons/search-circle-outline.svg"/>
          <ion-label>Search</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="add" href="/tabs/add">
          <ion-icon size="large" src="../assets/icons/add-circle-outline.svg"/>
          <ion-label>Add</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonPage, IonTabs, IonTabButton, IonTabBar, IonLabel, IonIcon } from '@ionic/vue';

export default {
  name: 'Tabs',
  components: { IonPage, IonTabs, IonTabButton, IonTabBar, IonLabel, IonIcon }
}
</script>