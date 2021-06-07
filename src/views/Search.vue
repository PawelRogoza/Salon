<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Database</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Database</ion-title>
        </ion-toolbar>
      </ion-header>   
        <div id="container">
          <ion-list v-for="car in carBase" :key="car.id">
            <ion-item-sliding>
              <ion-item>
                <ion-label class="ion-text-wrap">
                  Brand: {{car.marka}} Model: {{car.model}} Price: {{car.cena}}<br/>
                  Year: {{car.rocznik}} Mileage: {{car.przebieg}} Power: {{car.moc}}<br/>
                  Doors: {{car.drzwi}} Color: {{car.kolor}}
                </ion-label>
              </ion-item>
              <ion-item-options side="end">
                <ion-item-option @click="onDeleteClicked(car.id)" color="danger">Delete</ion-item-option>
              </ion-item-options>
            </ion-item-sliding>
          </ion-list>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel  } from '@ionic/vue';

export default  {
  name: 'Search',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonItem, IonList, IonLabel },
  data() {
    return {
      carBase: []
    }
  },
  methods: {
    search() {
      fetch("http://localhost:3000/baza").then((res) => {
        res
          .json()
          .then((data) => this.carBase = data)
          .catch((err) => console.log(err));
      });
    },
    onDeleteClicked(id) {
      fetch("http://localhost:3000/baza/"+id, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      window.location.reload();
    }
  },
  beforeMount(){
      this.search()
  }
}
</script>

<style scoped>
</style>