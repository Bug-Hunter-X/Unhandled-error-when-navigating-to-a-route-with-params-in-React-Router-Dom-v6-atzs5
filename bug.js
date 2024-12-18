import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
export default App; 

//This code will work perfectly fine until you add a route with a param like this

// <Route path="/users/:userId" element={<User />} />

// If the user tries to navigate to /users without providing userId, react router will throw an error. This could lead to unexpected crashes in production
