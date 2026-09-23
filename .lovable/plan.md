# Kongoni Camp Nanyuki website

## Goal
Build a polished, image-led hospitality website around **Stay. Meet. Explore.** The property remains the central story, with clear paths for leisure guests, families, travel partners, groups, and organisations.

The repository currently contains no Kongoni photography or logo. The first version will use clearly labelled, well-proportioned image placeholders that can be replaced directly when the real assets arrive; no stock imagery or unsupported visual claims will be introduced.

## Site structure
- Create a shared responsive header, mobile menu, footer, and sticky mobile action bar for Call, WhatsApp, and Enquire.
- Build distinct pages for Home, Stay, Meetings & Events, Dining, Explore Nanyuki, Gallery, and Contact.
- Keep the homepage editorial and visual, featuring the requested overview, audiences, accommodation preview, meetings, groups, dining, regional exploration, travel trade, verified facts, gallery preview, FAQ, enquiry prompt, and final call to action.
- Give each page unique search and social metadata, plus suitable Hotel/LodgingBusiness, FAQ, and breadcrumb structured data.

## Visual direction
- Use deep green, earthy brown, warm cream, charcoal, and one restrained accent, all defined as reusable design tokens.
- Pair large editorial typography with highly readable body text, generous spacing, restrained corners, and no gradients.
- Mix full-width imagery, editorial split layouts, image grids, information bands, and selective cards rather than repeating one layout.
- Add subtle reveal and menu transitions only, with reduced-motion support.

## Content and interactions
- Use the supplied factual copy and avoid unverified room amenities, capacities, reviews, trade terms, or facilities.
- Build accommodation categories for Traditional Rondavels, Deluxe Suites, Superior Deluxe Suites, and Standard Rooms without invented details.
- Add audience pathways for leisure, families, tour operators, groups, organisations, and events.
- Create an accessible gallery with category filters and a keyboard-friendly lightbox.
- Create a concise FAQ using only the verified answers in the brief.
- Link calls and WhatsApp to +254 702 868 888 and use the supplied social profiles.

## Enquiries and location
- Build a concise enquiry form with all requested fields, validation, clear success/error states, and delivery to reservations@kongonicamp.com.
- Use “Enquire About Your Stay” rather than a fake booking engine.
- Embed the connected Google map using the verified Kongoni Nanyuki listing at A2, coordinates 0.0212406, 37.0907582; include directions, phone, and WhatsApp actions.
- Email sending will be implemented after kongonicamp.com is configured as the verified sender domain. Until then, the interface will clearly preserve entered details and offer WhatsApp as a reliable fallback.

## Image readiness and performance
- Centralise image references and descriptive alt text so placeholders can be replaced without redesigning pages.
- Reserve exact aspect ratios to prevent layout shifts, lazy-load below-the-fold media, and prioritise the lead image.
- When the real repository photos arrive, audit each file, classify its subject, create responsive WebP/AVIF renditions, and map distinct images to rooms, grounds, dining, meetings, outdoors, and Nanyuki.

## Verification
- Check all routes and navigation on desktop and mobile.
- Test the mobile menu, sticky actions, gallery filters/lightbox, FAQ, enquiry validation/fallback, social links, directions, and map rendering.
- Confirm there are no broken links, overflow, overlapping text, invented testimonials, or unlabelled placeholder imagery.
