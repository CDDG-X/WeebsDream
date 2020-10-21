import React from 'react';
import { IonSlides, IonSlide, IonGrid, IonRow, IonCol, IonIcon, IonButton } from '@ionic/react';
import { compass, heart, book } from 'ionicons/icons';
import './Slidescover.css';

interface ContainerProps { }

const Slidescover: React.FC<ContainerProps> = () => {
  return (
    <IonSlides>

      <IonSlide>
        <img src="/assets/images/cover-bg-3.jpg" alt="cover-1" />
      </IonSlide>

      <IonSlide>
        <img src="/assets/images/cover-bg-2.jpg" alt="cover-2" />
      </IonSlide>

      <IonSlide>
        <img src="/assets/images/cover-bg-1.jpg" alt="cover-3" />
      </IonSlide>

    </IonSlides>
  );
};

export default Slidescover;
