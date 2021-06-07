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
      <ion-button @click="onClickedReloadPage">
       <ion-icon size="large" src="../assets/icons/refresh-circle-outline.svg"/>
      </ion-button>
        <div id="container">
          <ion-list v-for="car in carBase" :key="car.id">
            <ion-item-sliding>
              <ion-item>
                <ion-label class="ion-text-wrap">
                  Brand: {{car.marka}} 
                  <br/>
                  Model: {{car.model}} 
                  <br/>
                  Price: {{car.cena}}
                  <br/>
                  Year: {{car.rocznik}} 
                  <br/>
                  Mileage: {{car.przebieg}} 
                  <br/>
                  Power: {{car.moc}}
                  <br/>
                  Doors: {{car.drzwi}} 
                  <br/>
                  Color: {{car.kolor}}
                </ion-label>
              </ion-item>
              <ion-item-options side="end">
                <ion-item-option @click="onDeleteHandler(car.id)" color="danger">Delete</ion-item-option>
              </ion-item-options>
              <ion-alert
                :is-open="isOpenRef"
                header="Delete"
                message="Confirm this alert to delete selected entry"
                :buttons="buttons"
                @didDismiss="setOpen(false)"
              />
            </ion-item-sliding>
          </ion-list>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonItemSliding, IonItemOption, IonItemOptions, IonIcon, IonButton, IonAlert  } from '@ionic/vue';

export default  {
  name: 'Search',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonItem, IonList, IonLabel, IonItemSliding, IonItemOption, IonItemOptions, IonIcon, IonButton, IonAlert },
  data() {
    return {
      isOpenRef: false,
      setOpen: (state =  Boolean.prototype) => this.isOpenRef = state,
      idToDelete: null,
      buttons: [
            {
              text: 'Cancel',
              role: 'cancel'
            },
            {
              text: 'Confirm',
              handler: () => {
                this.onDeleteClicked(this.idToDelete)
              },
            },
          ],
      carBase: []
    }
  },
  methods: {
    onDeleteHandler(id) {
      this.idToDelete = id;
      this.setOpen();
    },
    search() {
      fetch("http://localhost:3000/baza").then((res) => {
        res
          .json()
          .then((data) => this.carBase = data)
          .catch((err) => console.log(err));
      });
    },
    onDeleteClicked(id) {
      if(id != null){
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
    onClickedReloadPage() {
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