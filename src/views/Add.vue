<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add new vehicle</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add new vehicle</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item>
          <ion-label>Brand: </ion-label>
          <ion-input v-model="marka" type="text" value=""/>
        </ion-item>
        <ion-item>
          <ion-label>Model: </ion-label>
          <ion-input v-model="model" type="text" value=""/>
        </ion-item>  
        <ion-item>
          <ion-label>Color: </ion-label>
          <ion-input v-model="kolor" type="text" value=""/>
        </ion-item>  
        <ion-item>
          <ion-label>Year: </ion-label>
          <ion-input v-model="rocznik" type="number" value="2021" min="1950" max="2077" step="1"/>
        </ion-item>
        <ion-item>
          <ion-label>Mileage: </ion-label>
          <ion-input v-model="przebieg" type="number" value="1" min="1" max="1000000" step="1"/>
          <i>km</i>
        </ion-item>
        <ion-item>
          <ion-label>Power: </ion-label>
          <ion-input v-model="moc" type="number" value="50" min="1" max="1000" step="1"/>
          <i>hp</i>
        </ion-item>
        <ion-item>
          <ion-label>Doors: </ion-label>
          <ion-input v-model="drzwi" type="number" value="5" min="1" max="7" step="1"/>
        </ion-item>
        <ion-item>
          <ion-label>Price: </ion-label>
          <ion-input v-model="cena" type="number" value="0" min="0" max="5000000" step="50"/>
          <i>€</i>
        </ion-item>
      </ion-list>
      <ion-item>
        <ion-button @click="dodajPojazd()">Add</ion-button>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList, IonLabel } from '@ionic/vue';
const API = 'https://localhost:44330/api/Car';

export default  {
  name: 'Add',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonButton, IonItem, IonList, IonLabel  },
    data() {
    return{
      marka:String.prototype,
      model:String.prototype,
      kolor:String.prototype,
      rocznik:Number,
      przebieg:Number,
      moc:Number,
      drzwi:Number,
      cena:Number
    }
  },
  methods: {
    dodajPojazd(){
      var pojazd = {
        marka: this.marka,
        model: this.model,
        kolor: this.kolor,
        rocznik: this.rocznik,
        przebieg: this.przebieg,
        moc: this.moc,
        drzwi: this.drzwi,
        cena: this.cena
      }
      fetch(API, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(pojazd)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      this.marka = String.prototype;
      this.model = String.prototype;
      this.kolor = String.prototype;
      this.rocznik = Number;
      this.przebieg = Number;
      this.moc = Number;
      this.drzwi = Number;
      this.cena = Number;
    }
  }
}
</script>