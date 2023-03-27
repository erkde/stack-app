import { Hidden, HiddenSizes } from './Hidden';
import React from 'react';
import styled from 'styled-components';

import { NullRenderer } from './NullRenderer';
import { Stack, Justify } from './Stack';

const Label = styled.label`
  margin-right: 0.4ch;
`;

function App() {
  const [alignX, setAlignX] = React.useState(Justify.left);

  return (
    <div className="App">
      <h2>Stack</h2>

      <p>
        Stack component that renders children in a column with equal space (12px for this demo) and divider between each.
      </p>

      <p>
        Empty and null children are hidden, and children containing a Hidden component will hide/show at the same 
        breakpoint as the Hidden component itself - try changing the viewport width to above and below 790px for 
        this demo.
      </p>

      <Label for="alignX">Justify</Label>
      <select id="alignX" onChange={(evt) => setAlignX(evt.target.value)} value={alignX}>
        <option value={Justify.left}>{Justify.left}</option>
        <option value={Justify.center}>{Justify.center}</option>
        <option value={Justify.right}>{Justify.right}</option>
      </select>

      <Stack alignX={alignX}>
        <NullRenderer />
        <NullRenderer />
        <div>Hello, worlds</div>
        <div>Hello, worlds</div>
        <NullRenderer />
        <NullRenderer />
        {false && <div>False</div>}
        {true && <div>True</div>}
        <Hidden above={HiddenSizes.md}>
          <div>I'm Hidden above md!</div>
        </Hidden>
        <div>Hello, worlds</div>
        <div>Hello, worlds</div>
      </Stack>
     </div>
  );
}

export default App;
