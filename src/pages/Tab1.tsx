import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Encabezado from '../components/Encabezado';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Encabezado></Encabezado>
      <IonContent color='danger'style={{"textAlign":"center"}}  fullscreen>
      <img src='./img/mini_deadpool.png' style={{
              width:"99%",
              height:"95%"
            }}></img>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
