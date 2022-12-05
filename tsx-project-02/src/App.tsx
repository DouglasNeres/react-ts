import { AppContexts } from "contexts";
import { AppRoutes } from "routes";

export default function App() {
  return (
    <AppContexts>
      <AppRoutes />
    </AppContexts>
  )
}


