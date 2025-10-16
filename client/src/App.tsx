import { Outlet } from "react-router";
import { CategoryProvider } from "./contexts/CategoryContext";
import { UserProvider } from "./contexts/UserContext";

export const App = () => {
  return (
    <UserProvider>
      <CategoryProvider>
        <Outlet />
      </CategoryProvider>
    </UserProvider>
  );
};
