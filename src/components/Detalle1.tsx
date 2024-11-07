import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Personajes from '../theme/data/personaje.json'
import { useEffect, useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router';
import Encabezado from './Encabezado';


const Detalle1: React.FC = () => {
   const { id } = useParams<{id:string}>();
   const personajeselect=Personajes.find(e=>e.id===id);
    return (
    <IonPage>
      <Encabezado></Encabezado>
    <IonContent style={{"textAlign":"center"}} color={'danger'} fullscreen>
      <IonTitle style={{"fontSize":"30px"}}>{personajeselect?.nombre}</IonTitle>
        <img style={{
          "width":"50%",
          "height":"50%",
          "borderRadius":"5px",
        }} src={personajeselect?.imagen}/>
        <p>Asociacion:{personajeselect?.asociacion?.map((element,index)=>(
          <IonChip color={'warning'} key={index}>{element}</IonChip>)
        )}</p>
        <p>Habilidades:{personajeselect?.habilidades?.map((e,index)=>(
          <IonChip color={'dark'} key={index}>{e}</IonChip>
        ))}</p>
        <p>Descripcion:{personajeselect?.descripcion}</p>   
    </IonContent>
  </IonPage>
  );
};

export default Detalle1;
