import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <div className="bg-main-off-white min-h-screen">
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})

{
  /* <Link to="/" className="[&.active]:font-bold">
          Home
        </Link> */
}
