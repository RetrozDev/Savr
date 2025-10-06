import { Outlet } from "react-router";
import { CategoryProvider } from "./contexts/CategoryContext";


export const App = () => {
  return (
    <CategoryProvider>
      <Outlet />
    </CategoryProvider>
  );
};
