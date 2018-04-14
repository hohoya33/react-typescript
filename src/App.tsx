import * as React from 'react';
import MyClass from './components/MyClass';
import MyComp from './components/MyComp';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MyClass isMarried={true} />
        <MyComp name={'interviewnest'} />
      </div>
    );
  }
}

export default App;