import { useRouteData } from 'umi'

export default () => {
  const { route } = useRouteData()
  return (
    <main>
      <p>main</p>
      <p>Route: {route.path}</p>
      <p>window.history.length: {history.length}</p>
    </main>
  )
}
