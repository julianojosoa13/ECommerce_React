import { Outlet } from "react-router-dom";
import NavigationBar from "./routes/navigation/navigation.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <NavigationBar />
      <Outlet /> {/* This renders the matched child routes */}
    </>
  );
};

export default App;
