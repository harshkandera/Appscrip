import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import styles from "../styles/ProductGrid.module.css";

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; NextJS App)",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.error("API response not ok:", response.status);
      return [];
    }

    return response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

function generateJsonLd(products) {
  if (!products || products.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Product Listing",
    description: "Discover our curated collection of premium products",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: product.image,
        category: product.category,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };
}

export default async function HomePage() {
  const products = await getProducts();
  const jsonLdSchema = generateJsonLd(products);

  return (
    <>
      {jsonLdSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      )}

      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>Discover Our Products</h1>
            <p className={styles.heroDescription}>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
        </section>

        <ProductGrid products={products} />
      </main>

      <Footer />
    </>
  );
}
