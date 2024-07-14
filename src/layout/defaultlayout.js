import Header from "../based/Header";
import styled from "styled-components";
import Common from "../based/Common";
import { useEffect } from "react";
export default function DefaultLayout({ children }) {
  useEffect(() => {
    if (!Common.CheckToken()) {
      // window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <Header />
      <Child className="child">{children}</Child>
    </>
  );
}

const Child = styled.div``;
