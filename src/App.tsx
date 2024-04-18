import "./App.css";
import HeadSection from "./components/head-section";
import MainSection from "./components/main-section";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex justify-center items-center h-[200rem] sm:h-[100rem] w-[90rem] md:w-screen bg-slate-100">
      <div className="relative flex flex-col items-center h-[75rem] w-[50rem] bg-white shadow-2xl">
        <div className="relative h-[65rem] w-[45rem] mt-10 border-2 border-black">
          <HeadSection />
          <MainSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
