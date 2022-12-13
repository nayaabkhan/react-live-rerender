import Link from 'next/link'
import React from 'react'
import JsxParser from 'react-jsx-parser'

const code = `
<input
  type='text'
  placeholder='I am react-jsx-parser'
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
      {/* @ts-expect-error */}
      <JsxParser
        bindings={{ readState, writeState }}
        jsx={code}
        blacklistedAttrs={[]}
        disableKeyGeneration
      />
    </>
  )
}
