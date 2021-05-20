<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon name="add"></ion-icon>
          <ion-label>Wyszukaj</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon name="add"></ion-icon>
          <ion-label>Dodaj</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon name="add"></ion-icon>
          <ion-label>Modyfikuj</ion-label>
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