import styles from "./Header.module.scss"

const navigationLinks = [
  { label: "Shop", href: "#shop" },
  { label: "On Sale", href: "#on-sale" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Brands", href: "#brands" },
]

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.promo}>
        <p>
          Sign up and get 20% off your first order.{" "}
          <a href="#newsletter">Sign Up Now</a>
        </p>
        <span className={styles.promoClose} aria-hidden="true">
          ×
        </span>
      </div>

      <div className={styles.container}>
        <a className={styles.logo} href="#top" aria-label="Shop.co home">
          SHOP.CO
        </a>

        <nav className={styles.navigation} aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <a className={styles.navLink} href={link.href} key={link.label}>
              {link.label}
              {link.label === "Shop" && (
                <svg
                  aria-hidden="true"
                  className={styles.chevron}
                  viewBox="0 0 12 8"
                >
                  <path d="m1 1 5 5 5-5" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        <form className={styles.search} role="search">
          <button
            aria-label="Search products"
            className={styles.searchButton}
            type="button"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 5 5" />
            </svg>
          </button>
          <input aria-label="Search for products" placeholder="Search for products..." />
        </form>

        <div className={styles.actions}>
          <a href="#cart" aria-label="Shopping cart">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 9H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </a>
          <a href="#account" aria-label="Your account">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
