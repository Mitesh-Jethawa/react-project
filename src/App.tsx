import { Header } from "./Components/Header";
import { MainContent } from "./Components/MainContent/MainContent";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header score={100} words={0} biases={0} />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;
