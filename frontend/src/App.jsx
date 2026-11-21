import FormList from "./components/FormList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-[95%] md:w-3/4 shadow-[0_4px_8px] min-h-[60vh] rounded p-2">
          <Header />
          <FormList />
        </div>
      </div>
      
    </>
  );
}

export default App;
