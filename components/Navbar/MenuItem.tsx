import Link from 'next/link'
import React from 'react'

function MenuItem() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuItem