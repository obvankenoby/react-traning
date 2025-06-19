import { useState } from 'react';
import { withLoaded } from './hocs/withLoading';

const MyComponent: React.FC = () => <div>Hello world</div>;

const WithLoadedComponent = withLoaded(MyComponent);

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <button onClick={() => setLoading((prev) => !prev)}>Change Loading</button>
      <WithLoadedComponent isLoaded={loading} />
    </>
  );
}

export default App;
