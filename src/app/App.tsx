import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
import { Home } from "@/pages/home";
import { SearchPage } from "@/pages/search";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search-page" element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
