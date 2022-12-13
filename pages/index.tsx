import Link from 'next/link'
import React from 'react'
import { LiveProvider, LivePreview, LiveError } from 'react-live'

const code = `
<input
  type='text'
  placeholder='I am react-live'
  value={readState()}
  onChange={(e) => writeState(e.target.value)}
/>
`.trim()

export default function Home() {
  const [state, setState] = React.useState('')

  function readState() {
    return state
  }

  function writeState(newValue: string) {
    setState(newValue)
  }

  return (
    <>
      <Link href="/">React Live example</Link> |{' '}
      <Link href="/jsxparser">JSX Parser example</Link>
      <hr />
      <LiveProvider code={code} scope={{ readState, writeState }}>
        <LivePreview />
        <LiveError />
      </LiveProvider>
    </>
  )
}
