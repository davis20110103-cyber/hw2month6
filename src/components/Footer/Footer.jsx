import styles from "./Footer.module.scss"

const footerGroups = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "Resources",
    links: ["Free eBooks", "Development Tutorial", "How to - Blog", "YouTube Playlist"],
  },
]

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.newsletter} id="newsletter">
          <h2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
          <form className={styles.subscribeForm}>
            <label className={styles.emailField}>
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <input
                aria-label="Email address"
                autoComplete="email"
                placeholder="Enter your email address"
                type="email"
              />
            </label>
            <button type="submit">Subscribe to Newsletter</button>
          </form>
        </section>

        <div className={styles.footerMain}>
          <div className={styles.about}>
            <a className={styles.logo} href="#top">
              SHOP.CO
            </a>
            <p>
              We have clothes that suit your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className={styles.socials} aria-label="Social media">
              <a href="#twitter" aria-label="Twitter">
                X
              </a>
              <a href="#facebook" aria-label="Facebook">
                f
              </a>
              <a href="#instagram" aria-label="Instagram">
                ◎
              </a>
              <a href="#github" aria-label="GitHub">
                ◉
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <nav
              aria-label={`${group.title} links`}
              className={styles.linkGroup}
              key={group.title}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className={styles.paymentMethods} aria-label="Payment methods">
            <span>VISA</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span> Pay</span>
            <span>G Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
