// Schema.org Review JSON-LD — All Star Cleaning — Astro v6
export interface ReviewData {
  author: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export function getReviewSchema(reviews: ReviewData[], locale: 'en' | 'fr') {
  return reviews.map((review) => ({
    '@type': 'Review' as const,
    author: {
      '@type': 'Person',
      name: review.author,
    },
    datePublished: review.date,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(review.rating),
      bestRating: '5',
    },
    reviewBody: review.text,
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'All Star Cleaning Ottawa',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '800 Hunt Club Rd',
        addressLocality: 'Ottawa',
        addressRegion: 'ON',
        postalCode: 'K1V 1C3',
        addressCountry: 'CA',
      },
    },
  }));
}
