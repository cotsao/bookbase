import { Switch, Route } from "react-router";
import Homepage from '../pages/Homepage.jsx';
import BookShowPage from "../pages/BookShowPage.jsx";
import SubjectShowPage from "../pages/SubjectShowPage.jsx";
import AuthorShowPage from "../pages/AuthorShowPage.jsx";


function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path = '/works/:bookID/' render={(props) => <BookShowPage {...props} />} />
            <Route exact path = '/subject/:subjectName/' render={(props) => <SubjectShowPage {...props} />} />
            <Route exact path = '/author/:authorID/' render={(props) => <AuthorShowPage {...props} />} />
        </Switch>
    )

}

export default Routes