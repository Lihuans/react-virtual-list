import FixedSizeList from "./pages/FixedSizeList";
import VariableSizeList from "./pages/VariableSizeList";
import VariableUnknowSizeList from "./pages/VariableUnknowSizeList";
import IntiateScrollObserverList from "./pages/IntiateScrollObserverList";

const App = () => {
  return (<div>
    <div>
      <h2>IntersectionObserver实现的虚拟列表(不知道每项的高度)</h2>
      <IntiateScrollObserverList/>
    </div>
    <div>
      <h2>元素固定高度的虚拟列表</h2>
      <FixedSizeList/>
    </div>
    <div>
      <h2>元素不定高度的虚拟列表(知道每项的高度)</h2>
      <VariableSizeList/>
    </div>
    <div>
      <h2>动态高度的虚拟列表(不知道每项的高度)</h2>
      <VariableUnknowSizeList/>
    </div>
    
  </div>
  );
}

export default App