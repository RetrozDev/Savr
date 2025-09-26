import { Outlet } from "react-router";
import { Navbar } from './components/navbar/Navbar'
import { CategoryProvider } from "./contexts/CategoryContext";


export const App = () => {
  return (
    <CategoryProvider>
      <Navbar />
      <Outlet />
    </CategoryProvider>
  );
};
