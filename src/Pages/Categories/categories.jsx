import React from "react";
import { useParams } from "react-router-dom";

export default function Categories() {
  const { search } = useParams();
  return <div>{search}</div>;
}
