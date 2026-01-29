"use client";

import Link from "next/link";
import styles from "../styles/Footer.module.css";


const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);


const GPay = () => <span className={styles.paymentText}>GPay</span>;
const Mastercard = () => <span className={styles.paymentText}>MC</span>;
const PayPal = () => <span className={styles.paymentText}>PayPal</span>;
const Amex = () => <span className={styles.paymentText}>Amex</span>;
const ApplePay = () => <span className={styles.paymentText}>Apple</span>;
const ShopPay = () => <span className={styles.paymentText}>Shop</span>;

const quickLinks = [
  { href: "/orders", label: "Orders & Shipping" },
  { href: "/join", label: "Join/Login as a Seller" },
  { href: "/payment", label: "Payment & Pricing" },
  { href: "/returns", label: "Return & Refunds" },
  { href: "/faqs", label: "FAQs" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/stories", label: "Stories" },
  { href: "/artisans", label: "Artisans" },
  { href: "/boutiques", label: "Boutiques" },
  { href: "/contact", label: "Contact Us" },
  { href: "/eu-compliance", label: "EU Compliances Docs" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2>Be the First to Know</h2>
          <p>Sign up for updates from mettā muse.</p>
          <form
            className={styles.newsletterForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.newsletterInput}
              aria-label="Email address"
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>

        <div className={styles.contactInfo}>
          <h3>Contact Us</h3>
          <p>+44 221 133 5360</p>
          <p>
            <a href="mailto:customercare@mettamuse.com">
              customercare@mettamuse.com
            </a>
          </p>

          <div className={styles.currencySection}>
            <h4>Currency</h4>
            <p>🇺🇸 USD</p>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </section>


      <div className={styles.footerMain}>
        <div className={styles.footerColumn}>
          <h3>mettā muse</h3>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com"
              className={styles.socialLink}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://linkedin.com"
              className={styles.socialLink}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h3>mettā muse Accepts</h3>
          <div className={styles.paymentMethods}>
            <GPay />
            <Mastercard />
            <PayPal />
            <Amex />
            <ApplePay />
            <ShopPay />
          </div>
        </div>
      </div>


      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
