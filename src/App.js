import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState('');

  console.log('Before useEffect')
  useEffect(() => {
  console.log('Inside useEffect')
    // console.log('This will Run for each Rendering...')
  },[]);
  console.log('After useEffect')

  return (
    <div>
      <h3>useEffect Hook Example</h3>
      <input
       autoFocus
       type="text"
       value={data}
       onChange={(e) => setData(e.target.value)}
        />
    </div>
  )
}

export default App
