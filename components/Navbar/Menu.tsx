import Item from './Item'
import { MenuItems } from './dataMenuItems'

export default function Menu({ menuItems }: any) {
  return (
    <div className='flex justify-between p-4 border-b border-gray-300 px-40'>
      <h3>ahadsenja</h3>
      <Item menuItems={MenuItems} />
      <button>Download CV</button>
    </div>
  )
}
