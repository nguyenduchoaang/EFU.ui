import React, { Suspense } from "react";
import Loading from "./based/Loading";

const HomePage = React.lazy(() => import("./homepage/homepage"));
const Speaking = React.lazy(() => import("./speaking/speaking"));

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
];

export default AppRoutes;
