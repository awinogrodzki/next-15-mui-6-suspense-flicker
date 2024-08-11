import { lazy } from "react";

export function Loader() {
  return <div>Loading...</div>;
}

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

export const LazyA = lazy(() => delay().then(() => import("./A")));
export const LazyB = lazy(() => delay().then(() => import("./B")));
export const LazyC = lazy(() => delay().then(() => import("./C")));
export const LazyD = lazy(() => delay().then(() => import("./D")));
export const LazyE = lazy(() => delay().then(() => import("./E")));
