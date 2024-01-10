import { ArrowDownToLine, CheckCircle, CircleDollarSignIcon, LeafIcon, LucideIcon } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'

//TODO: this will be from BE
type Perk = {
  name: string;
  icon: LucideIcon,
  description: string
}
const perks: Perk[] = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description: "Get your assets delivered in your inbox in seconds. Download them right away."
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description: "Every asset is verified to ensure the highest quality standard. Peace of mind with 30-day money back."
  },
  {
    name: "Planet-friendly",
    icon: LeafIcon,
    description: "1% of all sales will go to wildlife preservation associations."
  },
  {
    name: "Low prices",
    icon: CircleDollarSignIcon,
    description: "High quality assets that won't break your bank."
  }
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='sm:text-6xl text-4xl font-bold tracking-tight'>Your marketplace for high quality&nbsp;<span className='text-blue-500'>digital assets</span>.</h1>
          <p className='mt-6 max-w-prose text-lg text-muted-foreground'>
            Welcome to <span className='text-blue-500 font-bold'>_digitalhippo</span>. <br />
            High quality digital assets, handpicked by our experts.
          </p>
          <div className='flex sm:flex-row flex-col gap-4 mt-6'>
            <Link href={'/products'} className={buttonVariants()}>Browse Trending</Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/*//TODO: products list */}
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-6 gap-x-6 lg:gap-x-8'>
            {perks.map(perk => (<div key={perk.name} className='text-center md:text-left lg:text-center md:flex lg:block'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <div className='h-16 w-16 bg-blue-50 text-blue-800 flex items-center justify-center rounded-full'>
                  {<perk.icon className='w-1/3 h-1/3' />}
                </div>
              </div>
              <div className='mt-6 md:mt-0 lg:mt-6 md:ml-4 lg:ml-0'>
                <h3 className='text-blue-500 text-base font-medium'>{perk.name}</h3>
                <p className='mt-3 text-sm text-muted-foreground'>{perk.description}</p>
              </div>
            </div>))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
