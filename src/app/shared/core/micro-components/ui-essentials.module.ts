import { NgModule } from "@angular/core";
import {
  IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonRow, IonButton, IonIcon, IonItem, IonList, IonImg
} from "@ionic/angular/standalone";

@NgModule({
  declarations: [],
  imports: [
    IonCard,
    IonInput,
    IonImg,
    IonList,
    IonItem,
    IonIcon,
    IonButton,
    IonRow,
    IonCol,
    IonGrid,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader
  ],
  exports: [
    IonCard,
    IonInput,
    IonImg,
    IonList,
    IonItem,
    IonIcon,
    IonButton,
    IonRow,
    IonCol,
    IonGrid,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader
  ]
})
export class UiEssentials { }
