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
          <ion-input v-model="marka" inputmode="text" value="">Brand: </ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="model" inputmode="text" value="">Model: </ion-input>
        </ion-item>  
        <ion-item>
          <ion-input v-model="kolor" inputmode="text" value="">Color: </ion-input>
        </ion-item>  
        <ion-item>
          <ion-input v-model="rocznik" type="number" value="2021" min="1950" max="2077" step="1">Year: </ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="przebieg" type="number" value="1" min="1" max="1000000" step="1">Mileage: </ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="moc" type="number" value="50" min="1" max="5000" step="1">Power: </ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="drzwi" type="number" value="5" min="1" max="20" step="1">Doors: </ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="cena" type="number" value="0" min="0" max="5000000" step="50">Price: </ion-input>
        </ion-item>
      <ion-item>
        <ion-button @click="dodajPojazd()">Add</ion-button>
      </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList } from '@ionic/vue';

export default  {
  name: 'Add',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonButton, IonItem, IonList  },
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
      fetch("http://localhost:3000/baza", {
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