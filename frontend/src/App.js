import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Copyright from "./components/Copyright";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <MainContent />
      </main>
      <footer class="page-footer text-center font-small mt-4 wow fadeIn">
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
