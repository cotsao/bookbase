import { Switch, Route } from "react-router";
import Homepage from '../pages/Homepage.jsx';


function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
           {/*  <Route exact path = '/cities/:cityId/' render={(props) => <CityShowPage {...props} />} />
            <Route exact path = '/cities/:cityId/posts/:postsId' render={(props) => <PostShowPage {...props} />} /> */}
        </Switch>
    )

}

export default Routes