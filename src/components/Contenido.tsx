import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Personajes from '../theme/data/personaje.json'
import { Link } from 'react-router-dom';
import Encabezado from './Encabezado';

const Contenido: React.FC = () => {
  return (
    <div>
      <IonGrid>
        <IonRow>
        {
          Personajes.map((element)=>{
            return(
            <IonCol size='6'>
              <Link key={element.id} to={`/tab2/${element.id}`} >
              <IonCard style={{"height":"75%"}}>  
                  <img style={{
                    "width":"100%",
                    "height":"70%"
                  }} src={element.imagen}/> 
                  <IonCardHeader>
                    <IonCardTitle>{element.nombre}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
                </Link>
              </IonCol>
              )
          })
        }
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Contenido;
