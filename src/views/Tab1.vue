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
      "baza": [
        {
            "id":0,
            "marka":"BMW",
            "model":"E36",
            "kolor":"Czarny",
            "rocznik":1999,
            "przebieg":300000,
            "moc":100,
            "drzwi":5,
            "cena":5000
        },
        {
            "id":1,
            "marka":"Ałdi",
            "model":"A3",
            "kolor":"Srebrny",
            "rocznik":1995,
            "przebieg":450000,
            "moc":90,
            "drzwi":5,
            "cena":4500
        }
      ],
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
    znajdz(){
      console.log(this.idToSearch);
      for(var item of this.baza)
      {
        if(this.idToSearch != null && this.idToSearch == item.id)
        {
          console.log(item);
          this.marka = item.marka;
          this.model = item.model;
          this.kolor = item.kolor;
          this.rocznik = item.rocznik;
          this.przebieg = item.przebieg;
          this.moc = item.moc;
          this.drzwi = item.drzwi;
          this.cena = item.cena;
        }
      }
    }
  }
}
</script>