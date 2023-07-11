import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddTodoPage from "../pages/AddTodoPage";
import HomePage from "../pages/HomePage";
import EditTodoPage from "../pages/EditTodoPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
