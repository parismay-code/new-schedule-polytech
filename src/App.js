import * as React from 'react';
import {observer} from "mobx-react-lite";
import {useLocalStore} from "@utils/hooks/useLocal";
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import HomePage from "@pages/HomePage";
import SchedulePage from "@pages/SchedulePage";

import ScheduleStore from "@store/ScheduleStore";

import {routes} from "@configs/routes";

const App = () => {
    const store = useLocalStore(() => new ScheduleStore());

    React.useEffect(() => {
        store.fetchScheduleData();
    }, [store]);

    return (
        <div className="app">
            <Switch>
                <Route path={routes.home.index} exact>
                    <HomePage/>
                </Route>
                <Route path={routes.schedule.mask} exact>
                    <SchedulePage/>
                </Route>
                <Redirect to={routes.home.index}/>
            </Switch>
        </div>
    );
}

export default observer(App);
