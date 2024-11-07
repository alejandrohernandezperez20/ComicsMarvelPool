import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const Encabezado: React.FC = () => {
  return (
    <IonHeader >
        <IonToolbar color='dark'>
            <img src='./img/portada.png' style={{
              width:"150px",
              height:"80px"
            }}></img>
        </IonToolbar>
    </IonHeader>
  );
};

export default Encabezado;
