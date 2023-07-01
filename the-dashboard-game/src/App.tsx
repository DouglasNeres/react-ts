import { StyledApp } from "./AppStyle";
import { ContentMain } from "./components/ContentMain";
import { Header } from "./components/Header";
import { Leftbar } from "./components/Leftbar";
import { Rightbar } from "./components/Rightbar";

export function App() {
  return (
    <StyledApp>
      <div className="leftbar">
        <Leftbar />
      </div>
      <div>
        <Header />
        <div className="subject">
          <ContentMain />
          <Rightbar />
        </div>
      </div>
    </StyledApp>
  );
}
