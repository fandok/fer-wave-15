import Contoh from "./components/Contoh";
import IniComponent from "./components/Ini";
import Navbar from "./components/Navbar";
import Submit from "./components/Submit";

const App = () => {
  const handleLogout = () => {
    alert("Anda logout");
  };

  return (
    <>
      <IniComponent type="large" />
      <Navbar />
      <div>
        <h1>this is APP Component</h1>
      </div>
      <IniComponent type="small" />
      <Contoh />
      <button
        // onClick={() => {
        //   alert("Anda telah logout");
        // }}
        onClick={handleLogout}
      >
        Logout
      </button>
      <Submit />
    </>
  );
};

export default App;
