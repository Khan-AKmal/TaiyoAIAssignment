import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Contacts from "./components/pages/ContactsPage";
import "react-toastify/dist/ReactToastify.css";

const CreateContact = lazy(
  () => import("./components/pages/CreateContactPage")
);
const ChartsMaps = lazy(() => import("./components/pages/ChartsMapsPage"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/edit" element={<CreateContact edit />} />
          <Route path="/contacts/create" element={<CreateContact />} />
          <Route path="/" element={<ChartsMaps />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </div>
  );
};

export default App;
