<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Wyszukiwarka pojazdu firmy PAOSMI</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Dodaj pojazd</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Tab 2 page" />

      <ion-list>
        <ion-item>
          <ion-input v-model="marka" type="string" value="">Marka:</ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="model" type="string" value="">Model:</ion-input>
        </ion-item>  
        <ion-item>
          <ion-input v-model="kolor" type="string" value="">Kolor:</ion-input>
        </ion-item>  
        <ion-item>
          <ion-input v-model="rocznik" type="number" value="2021" min="1950" max="2077" step="1">Rocznik:</ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="przebieg" type="number" value="1" min="1" max="1000000" step="1">Przebieg:</ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="moc" type="number" value="50" min="1" max="5000" step="1">Moc:</ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="drzwi" type="number" value="5" min="1" max="20" step="1">Drzwi:</ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="cena" type="number" value="0" min="0" max="5000000" step="50">Cena:</ion-input>
        </ion-item>
      </ion-list>
      <ion-item>
        <ion-button @click="dodajPojazd()">Dodaj</ion-button>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab2',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonButton, IonItem, IonList  },
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
      console.log(pojazd);
    }
  }
}
</script>