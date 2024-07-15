import React, { Suspense } from "react";
import Loading from "./based/Loading";

const HomePage = React.lazy(() => import("./homepage/homepage"));
const Speaking = React.lazy(() => import("./speaking/speaking"));
const Word = React.lazy(() => import("./word/word"));
const Practice = React.lazy(() => import("./practice/Practice"));
const PracticeWord = React.lazy(() =>
  import("./practice/PracticeWord/PracticeWord")
);
const AppRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading isOpen={true} />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/speaking",
    element: (
      <Suspense fallback={<Loading isOpen={true} />}>
        <Speaking />
      </Suspense>
    ),
  },
  {
    path: "/word",
    element: (
      <Suspense fallback={<Loading isOpen={true} />}>
        <Word />
      </Suspense>
    ),
  },
  {
    path: "/practice",
    element: (
      <Suspense fallback={<Loading isOpen={true} />}>
        <Practice />
      </Suspense>
    ),
  },
  {
    path: "/practice/word",
    element: (
      <Suspense fallback={<Loading isOpen={true} />}>
        <PracticeWord />
      </Suspense>
    ),
  },
];

export default AppRoutes;
