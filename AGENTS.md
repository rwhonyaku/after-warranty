# AGENTS.md

## Project mission

After-Warranty.com exists to help real consumers answer the question that starts after the warranty ends: what does this situation usually mean, what are the realistic options, what matters most, and what should I check next?

The product is not just a pile of reference pages. It is a consumer-information site that should turn scattered policy language, repair-path ambiguity, and cost uncertainty into clear, useful, trustworthy pages that reduce confusion fast.

The standard for success is:

- factually grounded
- easy to scan
- visually intentional
- commercially viable without feeling exploitative
- useful enough that a person would bookmark it, share it, or stay on-site to read related pages

Reference-only does not mean boring, generic, or thin.

## Repo mental model

Before editing, think in this order:

1. What user question is this page or component supposed to answer?
2. What information gain does the current implementation provide beyond an official manufacturer page?
3. What is missing: clarity, structure, evidence, differentiation, visual hierarchy, or actual substance?
4. Can this be improved by sharpening the answer and presentation rather than simply adding more text?
5. Does the change strengthen the reusable system for more brands and page types, or does it create one-off drift?

Assume the repo is a structured publishing system, not a collection of disconnected pages. The current architecture uses Next.js App Router, brand hubs, region-based subpages, shared components, metadata generation, sitemap coverage, and reusable content patterns. Preserve that discipline.

Ship narrow but high-conviction improvements. Prefer one strong improvement that clearly raises usefulness, trust, or architecture quality over broad weak churn.

## What the site is

After-Warranty.com is an independent post-warranty consumer-reference website for brand-specific ownership questions after purchase.

It should help users understand:

- what the warranty change actually means in practice
- what common post-warranty issues or failure categories tend to matter
- what repair pathways exist
- what cost ranges or decision factors are worth knowing
- when replacement may be more rational than repair
- where official information ends and consumer interpretation begins

Pages should feel useful, edited, and intentionally designed for real people with post-purchase questions.

## What the site is not

The site is not:

- an official manufacturer property
- a legal disclaimer library
- a warranty booklet rewrite
- a repair forum clone
- a fake review site
- a lead-gen trap
- a thin SEO landing-page farm
- a pretend expert publication with invented hands-on experience
- a source of diagnostics, safety-critical instructions, or promises about prices, parts, eligibility, or outcomes

The goal is not to sound like a legal disclaimer or warranty booklet.

## Business goals

Primary business goals:

- earn durable organic traffic from high-intent post-purchase queries
- build trust strong enough to support display advertising without degrading the experience
- create scalable information architecture that can expand across brands and page types
- improve engagement, return visits, and page depth through better internal linking and page usefulness

Secondary business goals:

- create future room for ethical affiliate placements where they genuinely help users
- build a brand that is clearly independent, useful, and not spammy

Do not optimize for page count alone. Optimize for trust, coverage quality, and compounding architecture.

## Audience and search intent

Core audience:

- owners of products that are out of warranty or near the end of warranty
- consumers comparing repair versus replacement
- people trying to understand official support options, likely costs, exclusions, wait times, or service pathways
- users with brand-specific questions, often brand + issue + country/region intent

Typical search intents:

- informational: "Dyson warranty expired what now"
- comparative: "repair vs replace Dyson vacuum"
- cost-estimation: "Dyson repair cost out of warranty"
- pathway discovery: "Dyson repair options USA"
- issue understanding: "common Dyson problems after warranty"

Agents should identify the dominant intent per page and make that intent obvious in the opening section, headings, supporting modules, and internal links.

## Content philosophy

Use a consumer-reference but high-information-gain style.

That means:

- answer the main question quickly
- surface the distinctions that actually change a consumer decision
- convert vague policy language into plain-English implications
- organize complexity into clean, scannable sections
- interpret tables instead of dumping them
- explain tradeoffs without pretending certainty where none exists

Good pages do not just restate source material. They help a reader understand what matters.

Stronger editorial framing is allowed when it clarifies tradeoffs, reduces confusion, or improves usefulness, as long as it does not make unsupported claims or cross into unsafe advice.

Each page should create visible differentiation from official manufacturer pages while still citing official sources.

## Editorial rules

- Lead with the answer, not a generic introduction.
- Put the main takeaway high on the page.
- Explain why a distinction matters to the user.
- Translate policy language into practical implications.
- Use plain English, not faux-technical or faux-legal wording.
- Keep a clear line between sourced facts, reasonable interpretation, and uncertainty.
- If something varies by model, region, service channel, or product category, say so explicitly.
- If information is incomplete or unstable, acknowledge that directly.
- Prefer "what this usually means" over "here is a block of text from a source."
- Every table should be followed or preceded by interpretation.
- Every page should have a visible reason to exist beyond matching a keyword.

## UX / design philosophy

Design matters, trust matters, and page experience matters. Utility is not only text accuracy.

Pages must be:

- visually structured
- scannable
- modern
- calm and credible
- clearly grouped into digestible sections
- mobile-competent

Do not ship plain-document style pages that feel like unformatted notes or a copied policy sheet.

Prefer:

- strong page headers with immediate orientation
- short answer blocks near the top
- comparison cards, callouts, summary panels, and well-labeled tables
- consistent spacing and hierarchy
- obvious navigation between related brand pages and regions

Avoid sterile layouts that look unfinished, over-technical, or indifferent to user attention.

## SEO philosophy

SEO is a byproduct of usefulness, coverage clarity, internal linking, and clean metadata.

We do:

- build pages around real query classes
- create clear page-purpose separation
- make titles and headings match intent
- improve information gain versus competing pages
- maintain crawlable, sensible architecture
- use internal links to connect related decisions and follow-up questions

We do not:

- mass-produce near-duplicate pages
- publish thin pages to "cover keywords"
- stuff brand names, locations, or modifier phrases unnaturally
- write generic SEO intros
- add verbose filler to increase word count

New pages should only be added when they introduce real query coverage or clear information gain.

## Monetization philosophy

Display ads come first, but the site should never feel built around ad inventory.

Rules:

- ads must not interrupt the main answer before the user gets oriented
- ad placement must not crowd headings, tables, or key callouts
- pages must still feel valuable with ads removed
- do not create pages whose only business logic is "another place to show ads"
- do not distort copy to force affiliate angles where they are not genuinely useful

If affiliate content is added later, it must remain subordinate to trust, clarity, and independence.

## Information architecture rules

The architecture should stay systematic and query-driven.

Current mental model:

- site-level utility pages
- brand hub pages
- brand + page-type + region pages
- shared UI/content primitives

Rules:

- each route should have one clear job
- brand hubs should orient users, segment by region, and route into high-intent leaf pages
- leaf pages should answer one post-warranty question category well
- regions should exist only where regional differences materially affect meaning
- avoid multiplying routes when a shared component or a conditional data layer would do
- keep slug conventions stable and human-readable
- sitemap and metadata must reflect the actual route model

Do not add architecture that creates maintenance debt without increasing user value.

## Brand-page template rules

Brand hubs should:

- state what the brand section covers in plain English
- help users choose a region quickly
- help users choose a question type quickly
- summarize what changes after warranty expiration
- link to the highest-value next steps
- feel like a curated entry page, not a directory dump

Brand hubs must not:

- read like internal taxonomy labels
- rely only on tables or lists of links
- use lifeless copy like "select a module to proceed"
- make unsupported claims about service quality, part availability, or repair outcomes

Each brand hub should have:

- a concise lede
- quick orientation or "start here" guidance
- region selection or region explanation
- page-type navigation with plain-language labels
- source visibility
- a clear independence note without sounding defensive

## Page-type definitions

Use these page types intentionally. Do not blur them together.

### `warranty-expired`

Purpose: explain what warranty expiration means now, what official support may still exist, what exclusions matter, and what changes for the owner.

Should include:

- short answer summary
- key implications
- important exceptions or nuance
- official-source references

### `common-problems`

Purpose: explain common post-warranty issue categories or failure patterns at a consumer level.

Should include:

- symptom or category framing
- what tends to matter for decision-making
- signals that change urgency or economics
- links to repair/cost/replacement pages

Do not turn this into a DIY instruction manual.

### `repair-options`

Purpose: show realistic post-warranty repair pathways and tradeoffs.

Should include:

- official service options
- independent/local options where supportable
- friction points like turnaround, parts, transport, or diagnostics
- when a user may need to confirm model- or region-specific details

### `cost-ranges`

Purpose: help users understand plausible repair-cost structure without pretending to quote exact prices.

Should include:

- illustrative ranges only when grounded
- what drives variance
- cost floors versus cost spikes
- links to replace-vs-repair context

### `replace-vs-repair`

Purpose: clarify the decision framework, not force a conclusion.

Should include:

- the main economic or practical tradeoffs
- cases where repair is more plausible
- cases where replacement may be more rational
- uncertainty qualifiers where needed

## Writing rules for consumer-facing copy

- Answer the main question in the first screenful.
- Use direct, readable sentences.
- Use concrete wording over abstraction.
- Prefer "what this means for you" framing when appropriate.
- Keep paragraphs short.
- Use headings that reflect real user questions.
- Use bullets when they genuinely improve scan speed.
- Make transitions purposeful, not filler.
- Keep tone calm, helpful, and editorially confident.

Prohibited writing patterns:

- filler
- generic SEO intros
- keyword-padding
- robotic phrasing
- fake helpfulness
- empty neutrality
- repetitive table-only content without interpretation
- vague lines like "it depends" without explaining what it depends on
- exaggerated certainty
- fake first-person experience
- fabricated repair claims
- invented policy details

## Trust / sourcing rules

Trust is a core product feature.

Rules:

- prioritize official manufacturer sources for policy, warranty, and support details
- use non-official sources carefully and only where they add legitimate context
- distinguish clearly between sourced fact and editorial synthesis
- do not imply direct testing, direct service experience, or insider access unless it actually exists and is documented
- do not invent dates, costs, coverage terms, wait times, or repair practices
- do not present speculative claims as settled fact
- when citing official sources, interpret them in plain English rather than copying their tone
- when source coverage is weak, reduce the claim strength

Visible sourcing matters. Pages should not feel like ungrounded opinion.

## What to avoid

- pages that feel like boilerplate content templates with brand names swapped in
- pseudo-expert language that overstates confidence
- "neutral" copy that becomes sterile, timid, or useless
- walls of text
- single giant tables with no narrative help
- burying the answer beneath disclaimers
- confusing site voice with legal hedging
- clickbait framing
- manufacturer mimicry
- fake objectivity used as an excuse not to say anything useful
- overbuilding for future scale before the current page becomes good

## Coding standards

- Use TypeScript cleanly and prefer explicit, readable props/interfaces.
- Keep route files focused on page composition, metadata, and intent.
- Move repeated UI or content structures into shared components when reuse is real.
- Prefer server components unless client behavior is required.
- Avoid unnecessary `use client`.
- Keep content/data structures easy to audit and update.
- Preserve or improve accessibility semantics.
- Keep region and brand logic consistent across routes, navigation, sitemap, and metadata.
- Avoid one-off inline styling when a reusable pattern belongs in shared CSS or a shared component.
- No dead components, abandoned route experiments, or duplicate page shells.

## Component and styling standards

- Shared components should express recurring editorial patterns, not just visual wrappers.
- Components should help pages feel intentionally designed and easy to scan.
- Favor reusable sections such as summary cards, note boxes, source panels, decision grids, and comparison tables.
- Styling should feel modern and deliberate, not default-browser or ad hoc.
- Maintain coherent spacing, typography, border treatment, and hierarchy.
- Prefer global or shared styling patterns for repeated UI language.
- Avoid mixing multiple visual systems on adjacent pages.
- Do not use styling to fake authority; use styling to improve comprehension.

If a page is substantively improved but still looks plain, the work is incomplete.

## Internal linking rules

Internal links should help a user continue a decision journey.

Rules:

- link between related page types within the same brand
- link from general pages to the next likely question
- link from issue pages to repair/cost/decision pages
- link from brand hubs to the most useful leaf pages with meaningful anchor text
- keep anchors descriptive and user-oriented
- avoid excessive cross-linking that looks manufactured for SEO

Every important page should have a clear onward path.

## Metadata / title / description rules

Metadata must be useful, specific, and aligned with page intent.

Rules:

- titles should reflect the actual question the page answers
- descriptions should summarize the user value, not just restate keywords
- avoid vague branding-only titles on leaf pages
- avoid repetitive title formats that produce indistinguishable search snippets
- ensure canonicals, sitemap entries, and route coverage stay consistent
- metadata should describe independent reference value clearly, without sounding spammy or defensive

Good metadata improves click quality, not just impressions.

## Rules for adding new brands

Add a new brand only when:

- there is clear search demand or strategic coverage value
- the brand has enough post-warranty complexity to justify a section
- we can produce at least a credible hub plus high-value leaf pages
- the expansion fits the existing architecture

Before adding a new brand:

- review whether the brand deserves region splits
- define the highest-intent page types first
- ensure the hub can explain why the section exists
- ensure navigation, sitemap, metadata, and homepage references can support it

Do not add a brand just to make the site look bigger.

## Rules for expanding existing brands

Expand an existing brand when:

- a missing query class is important
- an existing page is too shallow to satisfy intent
- regional variation changes the answer materially
- there is a strong opportunity to connect related pages into a better cluster

Expansion should usually prioritize:

1. stronger answer quality on existing pages
2. clearer regional nuance where justified
3. better internal linking and page pathways
4. only then, new pages

## AdSense / quality safeguards

Assume low-value or thin behavior can hurt both trust and monetization.

Safeguards:

- do not publish pages whose main body is mostly boilerplate
- do not create mass near-duplicates across brands or regions
- do not let ads dominate above-the-fold space
- ensure each page has enough original explanation to justify its indexability
- keep disclaimers proportionate and non-obstructive
- avoid templated blocks that repeat across dozens of pages without added value
- maintain clear separation between informational content and ads

If a page would look weak with ads removed, it is not ready.

## Anti-patterns and forbidden shortcuts

Forbidden:

- copying manufacturer copy into pages with light rewording
- inventing specific repair practices, service terms, costs, or internal processes
- creating pages primarily to target keyword variants
- replacing interpretation with giant raw tables
- overusing disclaimers to cover weak content
- using "independent" or "neutral" as a substitute for usefulness
- introducing corporate, robotic, or pseudo-legal voice
- adding unsupported claims to sound authoritative
- padding sections to reach arbitrary word counts
- using region pages where region does not materially change the content
- shipping visual regressions because "the content is the main thing"

## Execution workflow for agents

When asked to make changes:

1. Inspect the existing repo structure, relevant routes, shared components, and current page patterns.
2. Infer the architecture and intent before editing.
3. Identify the highest-signal improvement available.
4. Prefer improving both substance and presentation, not just adding more content.
5. Reuse and strengthen shared systems when possible.
6. Keep claims grounded in what can actually be supported.
7. Update adjacent architecture when required: metadata, navigation, sitemap, reusable components, source presentation.
8. Review the page as a product experience, not just as code.

Do not ask unnecessary clarifying questions. Inspect the repo, infer structure, and make the strongest grounded improvement possible.

When the user asks for a file, always provide complete file replacements, not partial snippets, unless explicitly asked otherwise.

## Definition of done before any commit

Before committing, confirm:

- the page or component clearly serves a real user need
- the main question is answered quickly
- the result provides real information gain
- the copy is readable, grounded, and non-robotic
- the design is at least as strong as the substance
- tables are interpreted, not dumped
- sourcing and trust posture are appropriate
- metadata and internal links still make sense
- architecture remains consistent
- there is no thin, duplicative, or filler-heavy content
- the change improves the repo rather than merely changing it

If applicable, also confirm:

- route structure is still coherent
- sitemap/canonicals/metadata are updated
- navigation paths are intact
- reused components did not regress other pages
- ad placeholders do not interrupt core utility

## Prioritization rules when making changes

When tradeoffs exist, prioritize in this order:

1. factual integrity and trust
2. usefulness and information gain
3. clarity of answer and page structure
4. architectural consistency and scalability
5. design quality and scannability
6. monetization fit
7. incremental SEO gains

If forced to choose, prefer a smaller page that is truly helpful over a larger page that is generic.

If forced to choose, prefer a strong reusable pattern over a flashy one-off.

If forced to choose, prefer a claim that is carefully supported over a stronger claim that cannot be defended.
