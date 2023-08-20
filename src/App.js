// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Pages/Home/Home.js";
import Download from "./Pages/Download/Download.js";
import SignIn from "./Pages/SignIN/SignIn.js";
import ComingSoon from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Pages/ComingSoon/ComingSoon.js";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/template-gallery" element={<Download />} />
          <Route path="/new-feature" element={<Download />} />
          <Route path="/individuals" element={<Download />} />
          <Route path="/proffesionals" element={<Download />} />
          <Route path="/business" element={<Download />} />
          <Route path="/resources" element={<Download />} />
          <Route path="/blog" element={<Download />} />
          <Route path="/community" element={<Download />} />
          <Route path="/help" element={<Download />} />
          <Route path="/download" element={<Download />} />
          <Route path="/pricing" element={<Download />} />
          <Route path="/careers" element={<Download />} />
          <Route path="/registration" element={<SignIn />} />
          <Route path="/try-sos" element={<Download />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
