import "./App.css";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { Banner } from "./components/Banner";
import { ContentProvider } from "./components/ContentProvider";

function App() {
  return (
    <>
      <ContentProvider>
        <Banner />
      </ContentProvider>
      <BackgroundVideo />
    </>
  );
}

export default App;
