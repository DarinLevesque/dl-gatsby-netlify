import React from 'react';
import SkyLight from 'react-skylight';

class Example extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <section>
          <h1>React SkyLight</h1>
          <button onClick={() => this.animated.show()}>Open Modal</button>
        </section>
        <SkyLight 
          hideOnOverlayClicked 
          ref={ref => this.animated = ref} 
          title="Hi, I'm a simple modal"
          transitionDuration={800} 
        >
          Hello, I dont have any callback.
        </SkyLight>
      </div>
    )
  }
}

Example.displayName = 'Example';

export default Example;