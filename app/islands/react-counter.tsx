/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react'
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default qwikify$(Counter, { eagerness: 'hover' })
