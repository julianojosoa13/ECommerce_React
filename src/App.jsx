import { Outlet } from "react-router-dom";
import NavigationBar from "./routes/navigation/navigation.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
      <NavigationBar />
      <Outlet /> {/* This renders the matched child routes */}
    </>
  );
};

export default App;
