import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="chiSiamo" element={<ChiSiamo />} />
        <Route path="prodotti" element={<Prodotti />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
