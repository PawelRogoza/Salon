<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon name="search-circle-outline"></ion-icon>
          <ion-label>Search</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="add" href="/tabs/add">
          <ion-icon name="add-circle-outline"></ion-icon>
          <ion-label>Add</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="change" href="/tabs/change">
          <ion-icon name="build-outline"></ion-icon>
          <ion-label>Modify</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonPage, IonTabs, IonTabButton, IonTabBar, IonLabel, IonIcon } from '@ionic/vue';

export default {
  name: 'Tabs',
  components: { IonPage, IonTabs, IonTabButton, IonTabBar, IonLabel, IonIcon },
  setup() {
    return {
      
    }
  }
}
</script>