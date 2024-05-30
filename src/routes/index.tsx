import { createFileRoute } from '@tanstack/react-router'

// The Index component is rendered inside the root route or __route.tsx via the outlet.
// This is done via the createLazyFileRoute function which in configured to render Index below.

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex justify-center">
      {' '}
      <h2 className="text-red-400">Welcome Home buddy!</h2>
    </div>
  )
}
