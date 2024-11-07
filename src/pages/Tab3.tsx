import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { useState } from 'react';
import Encabezado from '../components/Encabezado';



const Tab3: React.FC = () => {

  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });


  const handleChange=(e:any)=> {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  }

  const handleSubmit=(e:any)=> {
    e.preventDefault();
    console.log('Formulario enviado:', formulario);
    alert('Formulario enviado:'+formulario.nombre);
    alert(formulario.email);
    alert(formulario.mensaje);
  }
  return (
    <IonPage>
        <Encabezado></Encabezado>
        <IonContent  color='danger' fullscreen>
      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonLabel position="stacked">Nombre</IonLabel>
          <IonInput type="text" name="nombre" value={formulario.nombre} onIonChange={handleChange} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput type="email" name="email" value={formulario.email} onIonChange={handleChange} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Mensaje</IonLabel>
          <IonTextarea name="mensaje" value={formulario.mensaje} onIonChange={handleChange} />
        </IonItem>
        <IonButton type="submit">Enviar</IonButton>
      </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
