import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId?" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User</h1>
      {userId ? <p>User ID: {userId}</p> : <p>No user ID provided</p>}
    </div>
  );
}

export default App;