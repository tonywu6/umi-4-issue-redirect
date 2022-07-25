import { useCallback, useEffect, useState } from 'react'
import { Link, Outlet } from 'umi'

import styles from './index.less'

const PopStateTracker = () => {
  const [pops, setPops] = useState<string[]>([])
  const listener = useCallback(() => setPops((c) => [...c, 'popstate']), [])
  useEffect(() => {
    window.addEventListener('popstate', listener)
    return () => window.removeEventListener('popstate', listener)
  }, [])
  return <>{pops.join('\n')}</>
}

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/lorem">Lorem</Link>
        </li>
      </ul>
      <Outlet />
      <p>
        <PopStateTracker />
      </p>
    </div>
  )
}
