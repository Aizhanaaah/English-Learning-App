import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { Home } from './home';
import { About } from './about';
import { Benefit } from './benefit';
import posthog from 'posthog-js';
import * as React from 'react';
import { PostHogProvider } from 'posthog-js/react';


function App() {

  let location = useLocation();
  React.useEffect(() => {
    posthog.capture('$pageview');
  }, [location]);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/benefit">Benefit</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefit" element={<Benefit />} />
      </Routes>
    </>
  );
}

export function MyApp() {
    return (
        <PostHogProvider apiKey="phc_ISTfZFGyWjPTqIhny0O26abNp0f99y8ohtu8quAHQKX" options={{
            host: "https://eu.posthog.com",
            
        }}>
            <RestOfApp />
        </PostHogProvider>
    )
}

export default App;
