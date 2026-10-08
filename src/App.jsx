import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";
import Calendar from "./pages/Calendar";
import StickyWall from "./pages/StickyWall";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/app"
          element={<Today />}
        />

        <Route
          path="/upcoming"
          element={<Upcoming />}
        />

        <Route
          path="/calendar"
          element={<Calendar />}
        />

        <Route
          path="/sticky-wall"
          element={<StickyWall />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;