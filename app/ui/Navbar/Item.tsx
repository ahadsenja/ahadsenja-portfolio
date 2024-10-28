import Link from 'next/link'

function Item({ menuItems }: any) {
  return (
    <ul className='flex gap-14'>
      {menuItems.map((item: any) => (
        <li>
          <Link href={item.href} key={item.name} className="text-gray-800 hover:text-red-900">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Item