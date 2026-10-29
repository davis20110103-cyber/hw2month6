import styles from "./Banner.module.scss"

const brandNames = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"]

const Star = ({ className }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 56 56"
    fill="currentColor"
  >
    <path d="M28 0c5.8 20 8 22.2 28 28-20 5.8-22.2 8-28 28C22.2 36 20 33.8 0 28 20 22.2 22.2 20 28 0Z" />
  </svg>
)

export const Banner = () => {
  return (
    <>
      <main className={styles.banner} id="top">
        <div className={styles.inner}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </h1>
            <p className={styles.description}>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <a className={styles.cta} href="#shop">
              Shop Now
            </a>

            <div className={styles.stats} aria-label="Shop.co in numbers">
              <div className={styles.stat}>
                <strong>200+</strong>
                <span>International Brands</span>
              </div>
              <div className={styles.stat}>
                <strong>2,000+</strong>
                <span>High-Quality Products</span>
              </div>
              <div className={styles.stat}>
                <strong>30,000+</strong>
                <span>Happy Customers</span>
              </div>
            </div>
          </div>

          <div className={styles.visual} aria-label="New season fashion">
            <img
              alt="Model wearing contemporary streetwear"
              className={styles.photo}
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85"
            />
            <Star className={styles.largeStar} />
            <Star className={styles.smallStar} />
          </div>
        </div>
      </main>

      <div className={styles.brands} id="brands" aria-label="Featured brands">
        <div className={styles.brandList}>
          {brandNames.map((brand) => (
            <span className={styles.brand} key={brand}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
