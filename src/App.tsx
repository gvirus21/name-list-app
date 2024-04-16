import "./App.css";
import HeadSection from "./components/head-section";
import MainSection from "./components/main-section";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-slate-100">
      <div className="relative flex flex-col items-center h-[75rem] w-[50rem] bg-white">
        <div className="relative border-2 border-black h-[65rem] w-[45rem] mt-10">
          <HeadSection />
          <MainSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
