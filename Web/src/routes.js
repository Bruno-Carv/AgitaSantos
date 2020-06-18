import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { isAuthenticated } from './services/auth';

import HomePage from './pages/Home';

import ArtistLoginPage from './pages/Artist/SignIn';
import ArtistRegisterPage from './pages/Artist/SignUp';
import ArtistMainPage from './pages/Artist/Feed';
import ArtistEventPage from './pages/Artist/Eventos';
import ArtistProfilePage from './pages/Artist/Profile';
import ArtistCommunityPage from './pages/Artist/Community';

import FansLoginPage from './pages/Fans/SignIn';
import FansRegisterPage from './pages/Fans/SignUp';
import FansMainPage from './pages/Fans/Feed';
import FansEventPage from './pages/Fans/Eventos';
import FansProfilePage from './pages/Fans/Profile';
import FansCommunityPage from './pages/Fans/Community';

import FeedDetaisPage from './pages/FeedDetais';

export default function Routes() {

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest}
            render={props =>
                isAuthenticated() ?
                    (
                        <Component {...props} />
                    ) : (<>
                        {toast.warn('Sessão finalizada.')}
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    </>)
            }
        />
    );

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />

                <Route path="/artist/login" component={ArtistLoginPage} />
                <Route path="/artist/register" component={ArtistRegisterPage} />
                <PrivateRoute path='/artist/home' component={ArtistMainPage} />
                <PrivateRoute path='/artist/event' component={ArtistEventPage} />
                <PrivateRoute path='/artist/profile' component={ArtistProfilePage} />
                <PrivateRoute path='/artist/community' component={ArtistCommunityPage} />

                <Route path="/user/login" component={FansLoginPage} />
                <Route path="/user/register" component={FansRegisterPage} />
                <PrivateRoute path='/user/home' component={FansMainPage} />
                <PrivateRoute path='/user/event' component={FansEventPage} />
                <PrivateRoute path='/user/profile' component={FansProfilePage} />
                <PrivateRoute path='/user/community' component={FansCommunityPage} />

                <Route path='/feed/:post' component={FeedDetaisPage} />
            </Switch>
        </BrowserRouter>
    );
}
