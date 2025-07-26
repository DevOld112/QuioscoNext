import { prisma } from '@/src/lib/prisma'
import CategoryIcon from '../ui/CategoryIcon'
import { useRouter } from 'next/navigation'
import Logo from '../ui/Logo'



async function getCategories() {
  return await prisma.category.findMany()
}


export default async function Ordersidebar() {
  const categories = await getCategories()
  

  return (
    <aside className="md:w-72 h-screen bg-white">
      <Logo />
        <nav className='mt-10'>
            {categories.map(category => (
              <CategoryIcon
              key={category.id}
              category={category}
              />
            ))}
        </nav>
        
    </aside>
  )
}
