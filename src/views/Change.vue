<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Modify existing entry</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Modify existing entry</ion-title>
        </ion-toolbar>
      </ion-header>   
      <div id="container">
        <ion-list>
        <ion-item>
          <ion-label>Brand: </ion-label>
          <ion-input v-model="p_marka" type="text" value=""/>
        </ion-item>
        <ion-item>
          <ion-label>Model: </ion-label>
          <ion-input v-model="p_model" type="text" value=""/>
        </ion-item>  
        <ion-item>
          <ion-label>Color: </ion-label>
          <ion-input v-model="p_kolor" type="text" value=""/>
        </ion-item>  
        <ion-item>
          <ion-label>Year: </ion-label>
          <ion-input v-model="p_rocznik" type="number" value="2021" min="1950" max="2077" step="1"/>
        </ion-item>
        <ion-item>
          <ion-label>Mileage: </ion-label>
          <ion-input v-model="p_przebieg" type="number" value="1" min="1" max="1000000" step="1"/>
          <i>km</i>
        </ion-item>
        <ion-item>
          <ion-label>Power: </ion-label>
          <ion-input v-model="p_moc" type="number" value="50" min="1" max="1000" step="1"/>
          <i>hp</i>
        </ion-item>
        <ion-item>
          <ion-label>Doors: </ion-label>
          <ion-input v-model="p_drzwi" type="number" value="5" min="1" max="7" step="1"/>
        </ion-item>
        <ion-item>
          <ion-label>Price: </ion-label>
          <ion-input v-model="p_cena" type="number" value="0" min="0" max="5000000" step="50"/>
          <i>€</i>
        </ion-item>
        </ion-list>
        <ion-item>
          <ion-button @click="zmien">Change</ion-button>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList, IonLabel } from '@ionic/vue';
const API = 'https://localhost:44330/api/Car/';
export default  {
  name: 'Change', 
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList, IonLabel },
  created() {
    this.onPageLoad();
  },
  data() {
    return{
      p_marka:null,
      p_model:null,
      p_kolor:null,
      p_rocznik:null,
      p_przebieg:null,
      p_moc:null,
      p_drzwi:null,
      p_cena:null,
      idToChange:null
    }
  },
  methods: {
    zmien(){
      if(this.idToChange != null){
        var body = 
        {
          "id":this.idToChange,
          "marka":this.p_marka,
          "model":this.p_model,
          "kolor":this.p_kolor,
          "rocznik":this.p_rocznik,
          "przebieg":this.p_przebieg,
          "moc":this.p_moc,
          "drzwi":this.p_drzwi,
          "cena":this.p_cena
        };
        fetch(API+this.idToChange, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'PUT',
          body: JSON.stringify(body)
        })
        .then(data => {
          console.log('Success:', data);

          this.p_marka=null;
          this.p_model=null;
          this.p_kolor=null;
          this.p_rocznik=null;
          this.p_przebieg=null;
          this.p_moc=null;
          this.p_drzwi=null;
          this.p_cena=null;
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        window.location.href = '/tabs/search';
      }
    },
    onPageLoad(){
      if(this.$route.params.id != null){
        this.idToChange = this.$route.params.id;
        fetch(API+this.idToChange).then((res) => {
          res
            .json()
            .then((data) => (
              this.p_marka = data.marka,
              this.p_model = data.model,
              this.p_kolor = data.kolor,
              this.p_rocznik = data.rocznik,
              this.p_przebieg = data.przebieg,
              this.p_moc = data.moc,
              this.p_drzwi = data.drzwi,
              this.p_cena = data.cena))
            .catch((err) => console.log(err));
        });
      }
    }
  }
}
</script>