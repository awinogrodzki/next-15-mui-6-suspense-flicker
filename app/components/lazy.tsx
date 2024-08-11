import { lazy } from "react";

export function Loader() {
  return <div>Loading...</div>;
}

export const LazyA = lazy(() => import("./A"));
export const LazyB = lazy(() => import("./B"));
export const LazyC = lazy(() => import("./C"));
export const LazyD = lazy(() => import("./D"));
export const LazyE = lazy(() => import("./E"));
