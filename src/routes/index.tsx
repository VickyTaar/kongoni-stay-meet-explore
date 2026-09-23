import { createFileRoute } from "@tanstack/react-router";
import { KongoniLanding } from "@/components/kongoni-landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kongoni Camp Nanyuki | Stay, Meet & Explore" },
      { name: "description", content: "Stay, meet and explore from Kongoni Camp Nanyuki. Accommodation, dining, meetings and retreats on 10 acres near Nanyuki CBD, with easy access to Laikipia attractions." },
      { property: "og:title", content: "Kongoni Camp Nanyuki | Stay, Meet & Explore" },
      { property: "og:description", content: "Accommodation, dining, meetings and retreats on 10 acres near Nanyuki CBD." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Hotel", "LodgingBusiness"],
          name: "Kongoni Camp Nanyuki",
          url: "http://www.kongonicamp.com/",
          telephone: "+254702868888",
          email: "reservations@kongonicamp.com",
          address: { "@type": "PostalAddress", streetAddress: "A2, Nanyuki town gate", addressLocality: "Nanyuki", addressRegion: "Laikipia", addressCountry: "KE" },
          geo: { "@type": "GeoCoordinates", latitude: 0.0212406, longitude: 37.0907582 },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            ["Where is Kongoni Camp?", "Kongoni Camp is located along the A2 at the Nanyuki town gate, approximately 5 minutes from Nanyuki CBD."],
            ["Is Kongoni suitable for tourists?", "Yes. Kongoni provides accommodation and a convenient base for guests exploring Nanyuki and Laikipia."],
            ["Can organisations hold meetings and retreats at Kongoni?", "Yes. The property can accommodate meetings, conferences, workshops, training programmes, retreats and team-building activities."],
            ["Does Kongoni provide catering?", "Yes. Catering options include continental, Indian and Japanese menus, with options available for different dietary requirements."],
          ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
        }),
      },
    ],
  }),
  component: KongoniLanding,
});
