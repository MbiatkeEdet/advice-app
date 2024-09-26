
import './App.css';
import './index.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App(){

  const [advice, setAdvice] =useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    
  }

  return (
    <div className="p-6 text-2xl">
      <Navbar />
      <h1>{advice}</h1>
      <p className="p-8 font-light text-2xl text-slate-600">Welcome,  click the button below to get your daily motivational quotes</p>
      <button className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-slate-700" onClick={getAdvice}>Get Quote</button>
      <p className='mt-5 px-9'>
        You have read<strong>{count}</strong> pieces of quote..
      </p>
      <Footer />
    </div>
  );
}

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
