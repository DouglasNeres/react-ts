import { ContentMain } from "./components/ContentMain";
import { Header } from "./components/Header";
import { Leftbar } from "./components/Leftbar";

export function App() {
  return (
    <div style={{ display: "flex" }}>
      <Leftbar />
      <div>
        <Header />
        <ContentMain />
      </div>
    </div>
  );
}
