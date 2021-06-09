<template>
  <ion-page>
    <ion-header>
      <ion-toolbar text-center>
        <ion-title id="titleWrapper">Database</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="onClickedReloadPage()">
        <ion-refresher-content refreshing-spinner="circles">
        </ion-refresher-content>
      </ion-refresher>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Database</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-searchbar
        @ionChange="onSearchbarValueChanged"
        v-model="searchBarInputValue"
      ></ion-searchbar>
      <div id="container">
        <ion-list v-for="car in carBase" :key="car.id">
          <ion-card>
            <ion-card-content>
              <ion-item-sliding>
                <ion-item>
                  <ion-label class="ion-text-wrap">
                    Brand: <b>{{ car.marka }}</b>
                    <br />
                    Model: <b>{{ car.model }}</b>
                    <br />
                    Price: <b>{{ car.cena }} <i>€</i></b>
                    <br />
                    Year: {{ car.rocznik }}
                    <br />
                    Mileage: {{ car.przebieg }} <i>km</i>
                    <br />
                    Power: {{ car.moc }} <i>hp</i>
                    <br />
                    Doors: {{ car.drzwi }}
                    <br />
                    Color: {{ car.kolor }}
                  </ion-label>
                </ion-item>
                <ion-item-options side="start">
                  <ion-item-option
                    @click="onModifyHandler(car.id)"
                    color="warning"
                    >Modify</ion-item-option
                  >
                </ion-item-options>
                <ion-item-options side="end">
                  <ion-item-option
                    @click="onDeleteHandler(car.id)"
                    color="danger"
                    >Delete</ion-item-option
                  >
                </ion-item-options>
                <ion-alert
                  :is-open="isOpenRef"
                  header="Delete"
                  message="Confirm this alert to delete selected entry"
                  :buttons="buttons"
                  @didDismiss="setOpen(false)"
                />
              </ion-item-sliding>
            </ion-card-content>
          </ion-card>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonLabel,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonAlert,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonCard,
  IonCardContent,
} from "@ionic/vue";
const API = "https://localhost:44330/api/Car/";
export default {
  name: "Search",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonItem,
    IonList,
    IonLabel,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonAlert,
    IonRefresher,
    IonRefresherContent,
    IonSearchbar,
    IonCard,
    IonCardContent,
  },
  created() {
    this.search();
  },
  data() {
    return {
      isOpenRef: false,
      setOpen: (state = Boolean.prototype) => (this.isOpenRef = state),
      idToDelete: null,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Confirm",
          handler: () => {
            this.onDeleteClicked(this.idToDelete);
          },
        },
      ],
      initCarBase: [],
      carBase: [],
      searchBarInputValue: "",
      isBottomReached: false,
    };
  },
  methods: {
    onDeleteHandler(id) {
      this.idToDelete = id;
      this.setOpen();
    },
    onModifyHandler(id) {
      this.$router.push("/tabs/change/" + id);
    },
    search() {
      fetch(API).then((res) => {
        res
          .json()
          .then((data) => ((this.initCarBase = data), (this.carBase = data)))
          .catch((err) => console.log(err));
      });
    },
    onDeleteClicked(id) {
      if (id != null) {
        fetch(API + id, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        window.location.reload();
      }
    },
    onClickedReloadPage() {
      window.location.reload();
    },
    onSearchbarValueChanged() {
      if (this.initCarBase.length > 0) {
        if (this.searchBarInputValue !== "") {
          var newCarBase = [];
          this.initCarBase.forEach((car) => {
            if (
              car.marka
                .toLowerCase()
                .includes(this.searchBarInputValue.toLowerCase())
            ) {
              newCarBase.push(car);
            }
          });
          this.carBase = newCarBase;
        } else {
          this.carBase = this.initCarBase;
        }
      }
    },
  },
};
</script>

<style scoped>
#onClickedReloadPage_Wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>