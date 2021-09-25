import { Switch, Route } from "react-router";
import Homepage from "../pages/Homepage.jsx";
import BookShowPage from "../pages/BookShowPage.jsx";
import SubjectShowPage from "../pages/SubjectShowPage.jsx";
import AuthorShowPage from "../pages/AuthorShowPage.jsx";
import ReadListIndex from "../pages/ReadListIndex.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import Profile from "../pages/Profile.jsx";
import ProtectedRoute from "../auth/ProtectedRoute.jsx";
import PublicListIndex from "../pages/PublicListIndex.jsx";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <ProtectedRoute exact path="/lists" component={ReadListIndex} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/list/index" component={PublicListIndex} />
      <ProtectedRoute path="/profile" component={Profile} />
      <Route
        exact
        path="/works/:bookID/"
        render={(props) => <BookShowPage {...props} />}
      />
      <Route
        exact
        path="/subject/:subjectName/"
        render={(props) => <SubjectShowPage {...props} />}
      />
      <Route
        exact
        path="/authors/:authorID/"
        render={(props) => <AuthorShowPage {...props} />}
      />
    </Switch>
  );
}

export default Routes;
