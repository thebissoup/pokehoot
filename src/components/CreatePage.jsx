import React from "react";
import { Container, Header, Content, Footer, Nav } from "rsuite";
import { Outlet } from "react-router-dom";
import { QuizForm } from "./QuizForm";
import { CreateChoose } from "./CreateChoose";

export function CreatePage() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}
