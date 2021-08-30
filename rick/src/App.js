import './App.scss';
import { useState } from 'react';
import EpisodePage from './pages/EpisodePage';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
import EpisodesPage from './pages/EpisodesPage';
import LocationsPage from './pages/LocationsPage';
import LocationPage from './pages/LocationPage';
import EnterPage from './pages/EnterPage';
import SettingsPage from './pages/SettingsPage';
import EditProfilePage from './pages/EditProfilePage';
import RegistrationPage from './pages/RegistrationPage';
import EditNamePage from './pages/EditNamePage';
import BottomBar from '../src/components/BottomBar';
import PageContext from './contexts/PageContext';

import {HashRouter  as Router, Switch, Route, Redirect} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';

import appStore from './store/AppStore';
import { observer } from 'mobx-react-lite';

const App = observer(props => {
    const [page, setPage] = useState('characters');
  return (
     <Router >
         <PageContext.Provider value={{page, setPage}}>
             <div className="App">
                 <Switch>
                     <Route exact path="/">
                         {appStore.isAuth === true ? <Redirect to="/characters" /> : <Redirect to="/login" />}
                     </Route>
                     <Route path={"/login"} exact component={() => <EnterPage appStore={appStore}/>} ></Route>
                     <Route path={"/registration"} component={RegistrationPage} isAuth={appStore.isAuth} />
                     <ProtectedRoute path={"/characters"} exact component={CharactersPage} isAuth={appStore.isAuth}/>
                     <ProtectedRoute path={"/characters/:id"} component={CharacterPage} isAuth={appStore.isAuth} />
                     <ProtectedRoute path={"/locations"} exact component={LocationsPage} isAuth={appStore.isAuth} />
                     <ProtectedRoute path={"/locations/:id"} component={LocationPage} isAuth={appStore.isAuth} />
                     <ProtectedRoute path={"/episodes"} exact component={EpisodesPage} isAuth={appStore.isAuth} />
                     <ProtectedRoute path={"/episodes/:id"} component={EpisodePage} isAuth={appStore.isAuth} />
                     <ProtectedRoute path={"/settings"} component={() => <SettingsPage appStore={appStore}/>} isAuth={appStore.isAuth} />
                     <ProtectedRoute path={"/editProfile"} component={() => <EditProfilePage appStore={appStore}/>} isAuth={appStore.isAuth} />
                     <ProtectedRoute path={"/editName"} component={() => <EditNamePage appStore={appStore}/>} isAuth={appStore.isAuth} />
                 </Switch>
             </div>
         </PageContext.Provider>
     </Router>
  );
})

export default App;
