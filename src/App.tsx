import { lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";

const NotFound = lazy(() =>
  import("@components/NotFound").then(({ NotFound }) => ({ default: NotFound }))
);

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="**" component={NotFound} />
    </Router>
  );
}

export default App;
