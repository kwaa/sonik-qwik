import type { Context } from 'sonik'
import Counter from '../islands/qwik-counter'
import ReactCounter from '../islands/react-counter'

export default function Index(c: Context) {
  return c.render(
    <div>
      <h2>
        Hello <a href='/about/me'>me</a>!
      </h2>
      <Counter />
      <ReactCounter />
    </div>,
    {
      title: 'Welcome to Sonik!',
      meta: [{ name: 'description', content: 'This an example for Sonik', key: 'Key' }],
    }
  )
}
