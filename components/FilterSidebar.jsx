"use client";

import { useState } from "react";
import styles from "../styles/FilterSidebar.module.css";

const ChevronDownIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={styles.filterArrow}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const filterCategories = [
  {
    id: "customizable",
    title: "Customizable",
    options: [
      { id: "custom-yes", label: "Yes" },
      { id: "custom-no", label: "No" },
    ],
  },
  {
    id: "ideal-for",
    title: "Ideal For",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "baby-kids", label: "Baby & Kids" },
    ],
  },
  {
    id: "occasion",
    title: "Occasion",
    options: [
      { id: "casual", label: "Casual" },
      { id: "formal", label: "Formal" },
      { id: "party", label: "Party" },
    ],
  },
  {
    id: "work",
    title: "Work",
    options: [
      { id: "french-knot", label: "French Knots" },
      { id: "leather", label: "Leather Work" },
      { id: "embroidery", label: "Embroidery" },
    ],
  },
  {
    id: "fabric",
    title: "Fabric",
    options: [
      { id: "cotton", label: "Cotton" },
      { id: "leather", label: "Leather" },
      { id: "silk", label: "Silk" },
      { id: "jute", label: "Jute" },
    ],
  },
  {
    id: "segment",
    title: "Segment",
    options: [
      { id: "luxury", label: "Luxury" },
      { id: "premium", label: "Premium" },
      { id: "mass", label: "Mass" },
    ],
  },
  {
    id: "suitable-for",
    title: "Suitable For",
    options: [
      { id: "indoor", label: "Indoor" },
      { id: "outdoor", label: "Outdoor" },
    ],
  },
  {
    id: "raw-materials",
    title: "Raw Materials",
    options: [
      { id: "plant-based", label: "Plant Based" },
      { id: "animal-based", label: "Animal Based" },
      { id: "synthetic", label: "Synthetic" },
    ],
  },
  {
    id: "pattern",
    title: "Pattern",
    options: [
      { id: "solid", label: "Solid" },
      { id: "striped", label: "Striped" },
      { id: "printed", label: "Printed" },
    ],
  },
];

export default function FilterSidebar({
  isOpen,
  onClose,
  isMobileOnly = false,
}) {
  const [expandedCategories, setExpandedCategories] = useState([
    "customizable",
    "ideal-for",
  ]);

  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const toggleFilter = (categoryId, optionId) => {
    setSelectedFilters((prev) => {
      const categoryFilters = prev[categoryId] || [];
      const isSelected = categoryFilters.includes(optionId);

      return {
        ...prev,
        [categoryId]: isSelected
          ? categoryFilters.filter((id) => id !== optionId)
          : [...categoryFilters, optionId],
      };
    });
  };

  const unselectAll = (categoryId) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [categoryId]: [],
    }));
  };

  const renderFilterSection = (category) => {
    const isExpanded = expandedCategories.includes(category.id);
    const categoryFilters = selectedFilters[category.id] || [];

    return (
      <div key={category.id} className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleCategory(category.id)}
          aria-expanded={isExpanded}
          aria-controls={`filter-${category.id}`}
        >
          <span className={styles.filterTitle}>{category.title}</span>
          <ChevronDownIcon />
        </button>

        <div
          id={`filter-${category.id}`}
          className={`${styles.filterContent} ${isExpanded ? styles.open : ""}`}
        >
          {categoryFilters.length > 0 && (
            <button
              className={styles.unselectAll}
              onClick={() => unselectAll(category.id)}
            >
              Unselect all
            </button>
          )}
          {category.options.map((option) => (
            <label key={option.id} className={styles.filterItem}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={categoryFilters.includes(option.id)}
                onChange={() => toggleFilter(category.id, option.id)}
              />
              <span className={styles.filterLabel}>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  if (isMobileOnly) {
    return (
      <>
        <div
          className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
          onClick={onClose}
          aria-hidden="true"
        />

        <aside
          className={`${styles.mobileSidebar} ${isOpen ? styles.open : ""}`}
          aria-label="Product filters"
        >
          <div className={styles.mobileHeader}>
            <span className={styles.mobileTitle}>Filters</span>
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close filters"
            >
              <CloseIcon />
            </button>
          </div>
          {filterCategories.map(renderFilterSection)}
        </aside>
      </>
    );
  }

  return (
    <aside className={styles.sidebar} aria-label="Product filters">
      {filterCategories.map(renderFilterSection)}
    </aside>
  );
}
