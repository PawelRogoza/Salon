<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Modyfikuj</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Modyfikuj</ion-title>
        </ion-toolbar>
      </ion-header>   
    <ExploreContainer name="Tab 3 page" />
      <div id="container">
        <ion-list>
          <ion-item>
            <ion-label position="floating">Indeks pojazdu</ion-label>
            <ion-input v-model.number="idToChange" type="number" value="0" min="0" max="9999" step="1"></ion-input>
          </ion-item>
        </ion-list>
        <ion-item>
          <ion-button @click="zmien()">Zmień</ion-button>
        </ion-item>
        <ion-item>
          <ion-label>Marka: {{p_marka}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Model: {{p_model}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Kolor: {{p_kolor}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Rocznik: {{p_rocznik}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Przebieg: {{p_przebieg}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Moc: {{p_moc}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Drzwi: {{p_drzwi}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Cena: {{p_cena}}</ion-label>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList, IonLabel } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab3',
  components: { ExploreContainer, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList, IonLabel },
    data() {
    return{
      p_marka:"",
      p_model:"",
      p_kolor:"",
      p_rocznik:0,
      p_przebieg:0,
      p_moc:0,
      p_drzwi:0,
      p_cena:0,
      idToChange:0
    }
  },
  methods: {
    zmien(id){
      console.log("Zmieniono pojazd"+id);
    }
  }
}
</script>