import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getPendingOrder() {
  const orders = await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      orderProducts: {
        include: {
          product: true

        }
      }
    }
  })

  return orders
}

export default async function OrdersPages() {
  
  const orders = await getPendingOrder()

  return (
    <>
        <Heading>
            Administra tus ordenes
        </Heading>
    

    {orders.length ? (
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
        {orders.map(order => (
          <OrderCard
          order={order}
          key={order.id}
          />
        ))}
      </div>
    ) : <p className="text-center">No Hay ordenes pendientes</p>}

    </>
  )
}
