import Counter from "../src/components/counter/Counter"
import GetDerived from "../src/components/example-2/GetDerived"
import CompshouldMount from "../src/components/comshodmount/Compshould"
import SnapBeforeUpate from "../src/components/snapb-update/Snap-before-update"
import ComponentDidUpdate from "../src/components/component-did-update/Component"
import ComponetUnMount from "../src/components/ummount/Unmount"

import CounterApp from "../src/components/all-lyf-cycles/Counter"


import './App.css';

function App() {
  return (
    <div>
      <CounterApp/>
    </div>
    // <div>
    //   <h1>===example-constuctor</h1>
    //   <Counter/>
    //   <h1>===example getDerivedStateFromProps</h1>
    //   <GetDerived favoritefood="apple"/>
    //   <h1>===example shouldComponentMount</h1>
    //   <CompshouldMount/>
    //   <h1>===example componentDidMount</h1>
    //   <ComponentDidUpdate/>
    //   <h1>===example getSnapshotBeforeUpdate</h1>
    //   <SnapBeforeUpate/>
    //   <h1>===example ComponetUnMount</h1>
    //   <ComponetUnMount/>
    // </div>
  );
}

export default App;
