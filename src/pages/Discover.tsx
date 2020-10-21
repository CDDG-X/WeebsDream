import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Slidescover from '../components/Slidescover';
import './Discover.css';

const Discover: React.FC = () => {
  return (
    <IonPage>
        <IonToolbar>
          <IonTitle color="danger">For You</IonTitle>
        </IonToolbar>

      <IonContent fullscreen>
        <Slidescover />
        <div className="container">
          <div className="hot-updates">
            <span className="v" />
            <strong>Hot Updates</strong>
            <br />
            <IonGrid>
              <IonRow>
                <IonCol>
                  <img src="/assets/images/cover-1.jpg" className="cover" />
                  <p>Bleach</p>
                  <p className="chapter">Up to Ch. 686</p>
                </IonCol>
                <IonCol>
                  <img src="/assets/images/cover-2.jpg" className="cover" />
                  <p>Haikyu!</p>
                  <p className="chapter">Up to Ch. 402</p>
                </IonCol>
                <IonCol>
                  <img src="/assets/images/cover-3.jpg" className="cover" />
                  <p>Bakuman</p>
                  <p className="chapter">Up to Ch. 176</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Discover;
