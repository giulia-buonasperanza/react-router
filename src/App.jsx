import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./layout/PrimoLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import Prodotti from "./pages/Prodotti.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="chiSiamo" element={<ChiSiamo />} />
          <Route path="prodotti" element={<Prodotti />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
