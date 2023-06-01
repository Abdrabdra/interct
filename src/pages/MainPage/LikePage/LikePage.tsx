import Like from "@components/screens/Main/Like";
import { Route, Routes } from "react-router-dom";

const LikePage = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<Like />} />

        <Route path="*" element={<Like />} />
      </Route>
    </Routes>
  );
};

export default LikePage;
