<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Wyszukiwarka</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Wyszukiwarka</ion-title>
        </ion-toolbar>
      </ion-header>   
      <ExploreContainer name="Wyszukiwarka" />
        <div id="container">
          <ion-list>
            <ion-item>
              <ion-label position="floating">Indeks pojazdu</ion-label>
              <ion-input v-model.number="idToSearch" type="number" value="0" min="0" max="9999" step="1"></ion-input>
            </ion-item>
          </ion-list>
          <ion-item>
            <ion-button @click="znajdz()">Wyszukaj</ion-button>
          </ion-item>
          <ion-item>
            <ion-label>Marka: {{marka}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Model: {{model}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Kolor: {{kolor}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Rocznik: {{rocznik}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Przebieg: {{przebieg}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Moc: {{moc}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Drzwi: {{drzwi}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Cena: {{cena}}</ion-label>
          </ion-item>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList, IonLabel  } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonButton, IonItem, IonList, IonLabel },
  data() {
    return{
      marka:"",
      model:"",
      kolor:"",
      rocznik:0,
      przebieg:0,
      moc:0,
      drzwi:0,
      cena:0,
      idToSearch:0
    }
  },
  methods: {
    znajdz() {
      fetch("http://localhost:3000/baza/"+this.idToSearch).then((res) => {
        res
          .json()
          .then((data) => (
            this.marka = data.marka,
            this.model = data.model,
            this.kolor = data.kolor,
            this.rocznik = data.rocznik,
            this.przebieg = data.przebieg,
            this.moc = data.moc,
            this.drzwi = data.drzwi,
            this.cena = data.cena))
          .catch((err) => console.log(err));
      });
    }
  }
}
</script>