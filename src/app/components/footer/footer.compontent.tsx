const navigation = {
  main: [{ name: 'GitHub', href: 'https://github.com/den-labs/mode-spray' }],
}

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy;2024 ModeSpray, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
