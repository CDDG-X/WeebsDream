import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon} from '@ionic/react';
import { compass, heartCircle, book } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

/* Pages */
import Discover from './pages/Discover';
import Favorites from './pages/Favorites';
import Bookshelf from './pages/Bookshelf';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/discover" component={Discover} exact={true} />
          <Route path="/favorites" component={Favorites} exact={true} />
          <Route path="/bookshelf" component={Bookshelf} exact={true} />
          <Route path="/" render={() => <Redirect to="/discover" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="discover" href="/discover" class="tabs">
            <IonIcon icon={compass} />
            <IonLabel>Discover</IonLabel>
          </IonTabButton>
          <IonTabButton tab="favorites" href="/favorites" class="tabs">
            <IonIcon icon={heartCircle} />
            <IonLabel>Favorites</IonLabel>
          </IonTabButton>
          <IonTabButton tab="bookshelf" href="/bookshelf" class="tabs">
            <IonIcon icon={book} />
            <IonLabel>BookShelf</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
