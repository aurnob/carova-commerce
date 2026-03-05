"use client"
import { useCategories } from "@lib/hooks/use-categories"
// import { useRegions } from "@/lib/hooks/use-regions"
import { getCountryCodeFromPath } from "@lib/utils/region"
import Link from "next/link" // Next.js Link component
// import CountrySelect from "@/components/country-select"
import { usePathname } from "next/navigation"

const Footer = () => {
  const { categories, loading, error } = useCategories({
    fields: "name,handle",
    queryParams: {
      parent_category_id: "null",
      limit: 5,
    },
  })

  // const { data: regions } = useRegions({
  //   fields: "id, currency_code, *countries",
  // })

  const pathname = usePathname()
  const countryCode = getCountryCodeFromPath(pathname) // Window location for path

  const baseHref = countryCode ? `/${countryCode}` : ""

  return (
    <footer
      className="bg-neutral-900 text-neutral-50 w-full"
      data-testid="footer"
    >
      <div className="content-container flex flex-col w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-y-6">
            {/* Brand name link */}
            <Link
              href={baseHref || "/"} // Link to home or based on the country code
              className="text-2xl font-display font-semibold hover:text-neutral-300 transition-colors w-fit uppercase tracking-tight"
            >
              Essentials
            </Link>
            <p className="text-neutral-400 max-w-sm text-sm leading-relaxed">
              Premium athleisure designed for movement. Thoughtfully crafted
              essentials that move seamlessly from studio to street.
            </p>
            <div>
              <p className="text-xs text-neutral-400 mb-2 uppercase tracking-wide">
                Region
              </p>
              {/* <CountrySelect regions={regions ?? []} /> */}
            </div>
          </div>

          {/* Shop Column */}
          {categories && categories.length > 0 && (
            <FooterColumn
              title="Shop"
              links={[
                {
                  name: "All Products",
                  url: `${baseHref}/store`,
                  isExternal: false,
                },
                ...categories.map((category) => ({
                  name: category.name,
                  url: `${baseHref}/categories/${category.handle}`,
                  isExternal: false,
                })),
              ]}
            />
          )}

          {/* About Column */}
          <FooterColumn
            title="About"
            links={[
              {
                name: "Our Story",
                url: `${baseHref}/about`,
                isExternal: false,
              },
              { name: "FAQ", url: `${baseHref}/faq`, isExternal: false },
              {
                name: "Payments",
                url: `${baseHref}/payments`,
                isExternal: false,
              },
              {
                name: "Shipping",
                url: `${baseHref}/shipping`,
                isExternal: false,
              },
              {
                name: "Returns",
                url: `${baseHref}/returns`,
                isExternal: false,
              },
              {
                name: "Contact",
                url: `${baseHref}/contact`,
                isExternal: false,
              },
            ]}
          />

          {/* Support Column */}
          <div className="flex flex-col gap-y-6">
            <h3 className="text-neutral-50 text-xs font-semibold uppercase tracking-wider">
              Support
            </h3>
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-wide">
                Customer Care
              </p>
              <p className="text-sm text-neutral-300 mt-2">
                hello@essentials.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Combined */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col gap-6">
            {/* Top row: Copyright, Social icons, Payment methods */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <span className="text-xs text-neutral-500">
                © {new Date().getFullYear()} Essentials. All rights reserved.
              </span>

              {/* Social Media Icons */}
              <div className="flex items-center gap-5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Add other social links here */}
              </div>

              {/* Payment Methods */}
              <div className="flex items-center gap-3">
                <img
                  src="/visa-01KGM4VCEN4S70B20CHKYRKYHD.svg"
                  alt="Visa"
                  className="h-7 w-auto object-contain"
                />
                <img
                  src="/mastercard-01KGM4VC6Q7D8S2A8GGBZZ9WH2.svg"
                  alt="Mastercard"
                  className="h-7 w-auto object-contain"
                />
                {/* Add more payment method icons */}
              </div>
            </div>

            {/* Bottom row: Links */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-xs">
              <Link
                href={`${baseHref}/privacy`}
                className="text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href={`${baseHref}/terms`}
                className="text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterColumn = ({
  title,
  links,
}: {
  title: string
  links: { name: string; url: string; isExternal: boolean }[]
}) => {
  return (
    <div className="flex flex-col gap-y-6">
      <h3 className="text-neutral-50 text-xs font-semibold uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.url} className="text-sm">
            {link.isExternal ? (
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                href={link.url}
                className="text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
