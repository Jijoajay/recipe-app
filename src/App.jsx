import "./App.css";
import { useSelector } from "react-redux";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Receipe from "./pages/Receipe";
import { Collection } from "./components/recipe/Collection";
import { isDarkMode } from "./redux/reducer/uiSlice";
import { FilterPanel } from "./components/filter/FilterPanel";
import { Routes, Route } from 'react-router-dom';

function App() {
  const isDark = useSelector(isDarkMode);
  return (
    <main
      className={`overflow-x-hidden w-[100vw] transition-all duration-500 ease-in-out ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-collection" element={<Receipe />} />
        <Route
          path="/saved-recipes"
          element={
            <Collection
              title="All Saved Recipes"
              isFullPage={true}
              isLoader={false}
            />
          }
        />
      </Routes>
      {/* <FilterPanel isRight={true} /> */}
    </main>
  );
}

export default App;
