## Reproduction Repo for a potential react-live bug

This repo contains a reproduction for bug filing to
[FormidableLabs/react-live](https://github.com/FormidableLabs/react-live).

The bug is that the preview completely re-renders the given preview example when
a parent is caused to re-render, in this case via a `useState` hook. This can be
experience by typing in the text field rendered by the `LivePreview`. Once you
type, the field looses focus as it is completely re-rendered as a new DOM
element instead of just changing the `value` attribute of the `input`.

It is expected the whole input isn't re-rendered but only the `value` updated.

## Getting Started

### CodeSandbox

https://codesandbox.io/p/github/nayaabkhan/react-live-rerender/react-live-rerender

### Locally

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.
