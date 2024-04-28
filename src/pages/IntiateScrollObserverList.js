import React from "react";
import "./intiateScrollObserverList.css";
import SlidingWindowScrollHook from "../components/SlidingWindowScrollHook";
// import MY_ENDLESS_LIST from "./Constants";
const MY_ENDLESS_LIST = new Array(1000).fill(null).map((_, idx) => ({key: idx, value: idx + 1}));

function App() {
  return (
    <div className="container">
        <SlidingWindowScrollHook list={MY_ENDLESS_LIST} height={195} />
    </div>
  );
}

export default App;
