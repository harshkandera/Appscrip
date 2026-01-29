"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";
import styles from "../styles/ProductGrid.module.css";

const FilterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
  </svg>
);

const ChevronIcon = ({ direction }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    {direction === "left" && <polyline points="15 18 9 12 15 6" />}
    {direction === "right" && <polyline points="9 18 15 12 9 6" />}
    {direction === "down" && <polyline points="6 9 12 15 18 9" />}
  </svg>
);

export default function ProductGrid({ products }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [sortBy, setSortBy] = useState("recommended");

  return (
    <section className={styles.container}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <span className={styles.itemCount}>{products.length} ITEMS</span>
          <button
            className={styles.filterToggleBtn}
            onClick={() => setShowFilters(!showFilters)}
          >
            <ChevronIcon direction={showFilters ? "left" : "right"} />
            {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

        <div className={styles.toolbarRight}>
          <select
            className={styles.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort products"
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price-low">PRICE: LOW TO HIGH</option>
            <option value="price-high">PRICE: HIGH TO LOW</option>
          </select>
        </div>
      </div>

      <button
        className={styles.mobileFilterBtn}
        onClick={() => setIsFilterOpen(true)}
        aria-label="Open filters"
      >
        <FilterIcon />
        FILTER
      </button>

      <div className={styles.mainContent}>
        {showFilters && (
          <div className={styles.sidebarContainer}>
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            />
          </div>
        )}

        <div className={styles.gridContainer}>
          {products.length > 0 ? (
            <div className={styles.grid}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className={styles.noProducts}>No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
