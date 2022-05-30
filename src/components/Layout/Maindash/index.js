import React from 'react';

import { Switch, Route } from 'react-router-dom';


import routes from '../../../routes/index';
function ManiDash(props) {
    const showRouter = (router) => {
        var result = null;
        if (router.length > 0) {
            result = router.map((router, index) => {
                return (
                    <Route
                        key={index}
                        path={router.path}
                        exact={router.exact}
                        component={router.mani}
                    />
                )
            })
        }
        return result;
    }
    return (
        <>
            <Switch>
                {showRouter(routes)}
            </Switch>
        </>
    );
}

export default ManiDash;