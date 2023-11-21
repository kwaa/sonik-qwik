import { component$, useSignal } from '@builder.io/qwik'

export default component$(() => {
  const counter = useSignal(0)

  return (
    <div>
      <p>Count: {counter.value}</p>
      <button onClick$={() => counter.value++}>Increment</button>
    </div>
  )
})
