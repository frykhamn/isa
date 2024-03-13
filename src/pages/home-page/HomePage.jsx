import hero from "./../../assets/hero.png"
import { useState } from 'react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]




export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <nav className="flex justify-end lg:justify-center p-6 lg:px-8" aria-label="Global">
          {/* hamburger meny */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >Hamburger
              <span className="sr-only">Open main menu</span>
            </button>
          </div>

          {/* navbar meny */}
          <div className="hidden font-cor lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6">
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <h2 className="text-4xl font-cor mb-6">Isabella dos Santos</h2>
              <h1 className="text-4xl font-cor font-bold tracking-tight sm:text-6xl">
                Somatic entanglements
              </h1>
              <p className="mt-6 font-cor text-lg leading-8">
                Treatments for every season of life
              </p>
          </div>
        </div>
      </header>

      <main>
        hej
      </main>


    </>
  )
}
