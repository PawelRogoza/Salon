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
            <ion-input @ionChange="onValueChanged" v-model.number="idToChange" type="number" value="" min="0" max="9999" step="1"></ion-input>
          </ion-item>
        <ion-item>
          <ion-input v-model="p_marka" inputmode="text" value="">Marka: </ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="p_model" inputmode="text" value="">Model: </ion-input>
        </ion-item>  
        <ion-item>
          <ion-input v-model="p_kolor" inputmode="text" value="">Kolor: </ion-input>
        </ion-item>  
        <ion-item>
          <ion-input v-model="p_rocznik" type="number" value="2021" min="1950" max="2077" step="1">Rocznik: </ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="p_przebieg" type="number" value="1" min="1" max="1000000" step="1">Przebieg: </ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="p_moc" type="number" value="50" min="1" max="5000" step="1">Moc: </ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="p_drzwi" type="number" value="5" min="1" max="20" step="1">Drzwi: </ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model="p_cena" type="number" value="0" min="0" max="5000000" step="50">Cena: </ion-input>
        </ion-item>
        <ion-item>
          <ion-button @click="zmien">Zmień</ion-button>
        </ion-item>
        </ion-list>
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
    async zmien(){
      if(this.idToChange != null){
        alert("Edytowanie pojazdu ["+this.idToChange+"]");

        fetch("http://localhost:3000/baza/"+this.idToChange, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'PUT',
          body: JSON.stringify({
            marka:this.p_marka,
            model:this.p_model,
            kolor:this.p_kolor,
            rocznik:this.p_rocznik,
            przebieg:this.p_przebieg,
            moc:this.p_moc,
            drzwi:this.p_drzwi,
            cena:this.p_cena
          })
        })
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        this.p_marka=null;
        this.p_model=null;
        this.p_kolor=null;
        this.p_rocznik=null;
        this.p_przebieg=null;
        this.p_moc=null;
        this.p_drzwi=null;
        this.p_cena=null;

        console.log("Zmieniono pojazd "+this.idToChange);
      }
    },
    onValueChanged(){
      if(this.idToChange != null){
        fetch("http://localhost:3000/baza/"+this.idToChange).then((res) => {
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