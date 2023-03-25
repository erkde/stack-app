import { Hidden, HiddenSizes } from './Hidden';
import { NullRenderer } from './NullRenderer';
import { Stack } from './Stack';

function App() {
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

      <Stack>
        <div>Hello, worlds</div>
        <div>Hello, worlds</div>
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
