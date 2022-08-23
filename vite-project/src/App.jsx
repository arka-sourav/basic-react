import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img="https://i.picsum.photos/id/668/200/300.jpg?hmac=E7YE9NQG89nCsmW1hc-1nACBZTj9ll8IiXS65WjdD28"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
