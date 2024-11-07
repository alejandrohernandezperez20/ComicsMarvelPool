import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Contenido from '../components/Contenido'
import Personajes from '../theme/data/personaje.json'
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import Encabezado from '../components/Encabezado';


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Encabezado></Encabezado>
      <IonContent color='danger'  fullscreen>
              <Contenido></Contenido>  
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
