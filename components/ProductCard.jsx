"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const HeartIcon = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const altText = `${product.title} - ${product.category} product image`;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={altText}
          fill
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          className={styles.image}
          loading="lazy"
        />
        <button
          className={`${styles.wishlistButton} ${isWishlisted ? styles.active : ""}`}
          onClick={toggleWishlist}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <HeartIcon filled={isWishlisted} />
        </button>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.priceContainer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
        </div>
        <p className={styles.signInPrompt}>
          Sign in or Create an account to see pricing
        </p>
      </div>
    </article>
  );
}
