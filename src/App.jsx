import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "./features/auth";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
