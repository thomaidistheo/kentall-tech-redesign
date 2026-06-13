// SEO landing pages ("use-case" / vessel-type pages).
//
// Each entry powers one route under app/<slug>/page.jsx via the shared
// <UseCase slug="..." /> view. The page.jsx file re-declares title/description
// for Next's metadata; the same copy lives here to render the page content
// and the FAQPage JSON-LD.
//
// These pages reuse the visual building blocks of the boat PDP (Banner,
// FeatureStrip, BodyBanner, fleet-map + status legend, trip-history grid,
// VAT report imagery). To keep this file plain data, images and icons live in
// UseCase.jsx and are selected here by key.
//
// Entry shape:
//   metaTitle, metaDescription -> <head> (kept in sync with page.jsx metadata)
//   h1                          -> banner title + the single on-page <h1>
//   jsonLd                      -> { name, description } for <ProductJsonLd>
//   subtitle                    -> the large centered line under the device shot
//   features: [{ label, icon }] -> the 4-up FeatureStrip (icon = key, see UseCase)
//   blocks: [ ... ]             -> ordered content sections, each a { kind, ... }:
//        { kind: 'prose',     title, body }            body = [string | {list:[]}]
//        { kind: 'bodyBanner' }                        the shared marine mid-banner
//        { kind: 'fleetMap',  title, body }            fleet-map screenshot + status legend
//        { kind: 'photoGrid', title, body }            trip-history image pair
//        { kind: 'vatReport', title, body, desc }      VAT trip report + nautical-zone map
//   faq: [{ q, a }]             -> rendered on-page AND as FAQPage structured data
//   related: [{ href, label }]  -> internal links (avoids orphan pages)
//
// House rules: no client names, no public prices. Credibility comes from
// capabilities, the Greek-market VAT specialisation and aggregate framing.

export const useCases = {
    'yacht-tracking': {
        metaTitle: 'Yacht Tracking',
        metaDescription:
            'Yacht GPS tracking and monitoring for owners and charter fleets: real-time position, geo-fenced alerts, 6 months of trip history and automated reports on any device.',
        h1: 'Yacht Tracking',
        jsonLd: {
            name: 'KentallTech Yacht Tracking',
            description:
                'Real-time yacht GPS tracking and fleet monitoring with geo-fenced alerts, trip history and automated reports for owners and charter operators.',
        },
        subtitle:
            'Know where your yacht is at any moment, with real-time tracking, geo-fenced safety alerts and automated reports, from any web-enabled device.',
        features: [
            { label: 'professional web platform', icon: 'platform' },
            { label: 'real-time map tracking', icon: 'map' },
            { label: '6 months trip history', icon: 'clock' },
            { label: 'instant safety alerts', icon: 'bell' },
        ],
        blocks: [
            {
                kind: 'prose',
                title: 'See your yacht live, anywhere',
                body: [
                    'Open the platform in any browser, or the iPhone and Android app, and your yacht appears on the live map with its speed, heading and connection status updated in real time. Nothing to install: the platform is cloud hosted and always up to date.',
                    'Manage one yacht from a single account, or create sub-user accounts for clients, captains and crew with access limited to the vessels they should see.',
                ],
            },
            { kind: 'bodyBanner' },
            {
                kind: 'fleetMap',
                title: 'Your whole fleet, live on the map',
                body: [
                    'View every yacht at a glance with its real-time status, then click any vessel for full details. Set geo-fenced zones around marinas, anchorages or port limits and get notified the moment a yacht leaves them, on-screen with an alarm sound and by email.',
                ],
            },
            {
                kind: 'photoGrid',
                title: 'Six months of trip history',
                body: [
                    'Replay any past trip point by point for up to six months. Confirm the route a charter client followed, review time spent in each area, and inspect speed, coordinates and engine status at every step of the journey.',
                ],
            },
            {
                kind: 'prose',
                title: 'Works with the device you already have',
                body: [
                    'Already have a tracker fitted? Our platform is compatible with around 95% of the GPS devices on the market, so you can switch to KentallTech without installing new hardware. Prefer a turnkey setup? Our KEN-M devices ship with a 2-year warranty and full technical support.',
                ],
            },
        ],
        faq: [
            {
                q: 'Can I track my yacht from my phone?',
                a: 'Yes. The Kentall tracking platform runs in any browser and as a native iPhone and Android app, showing your yacht live on the map with push notifications for the alerts you configure.',
            },
            {
                q: 'Do I have to buy a new GPS device?',
                a: 'Not necessarily. The platform supports roughly 95% of the GPS trackers currently on the market. If you already have a compatible device we can connect it; otherwise we can supply a KEN-M device.',
            },
            {
                q: 'Can charter companies give clients limited access?',
                a: 'Yes. Account administrators can create sub-users with their own credentials and restrict each one to selected vessels, which is ideal for charter operators managing a fleet.',
            },
        ],
        related: [
            { href: '/charter-fleet-tracking', label: 'Charter fleet tracking' },
            { href: '/sailboat-vat-tracking', label: 'Sailboat VAT tracking (ΠΟΛ.1240/2018)' },
            { href: '/product-boat', label: 'Boat & yacht GPS tracking platform' },
        ],
    },

    'charter-fleet-tracking': {
        metaTitle: 'Charter Fleet Tracking',
        metaDescription:
            'Fleet management and GPS tracking for yacht and sailboat charter companies: live fleet map, per-vessel reports, geo-fenced alerts and automated VAT trip reports for Greek tax law.',
        h1: 'Charter Fleet Tracking',
        jsonLd: {
            name: 'KentallTech Charter Fleet Tracking',
            description:
                'GPS fleet management for yacht and sailboat charter operators with a live fleet map, geo-fenced alerts, trip history and automated VAT trip reports.',
        },
        subtitle:
            'Run your whole charter fleet from one screen, with a live map, geo-fenced alerts and the automated VAT reporting Greek charter documentation demands.',
        features: [
            { label: 'manage your whole fleet', icon: 'users' },
            { label: 'live map tracking', icon: 'map' },
            { label: 'automated VAT reports', icon: 'doc' },
            { label: 'geo-fenced safety alerts', icon: 'shield' },
        ],
        blocks: [
            {
                kind: 'prose',
                title: 'Your entire fleet at a glance',
                body: [
                    'Every vessel appears on a single live map with its speed, heading and connection status. Click any boat for its full status, or drop down to a per-vessel view for trips, reports and alerts.',
                    'Create sub-user accounts for office staff, captains or clients, each scoped to the vessels they are allowed to see. It is the platform trusted by a large share of Greece’s charter fleet.',
                ],
            },
            { kind: 'bodyBanner' },
            {
                kind: 'fleetMap',
                title: 'Confirm what happened on every charter',
                body: [
                    'With up to six months of trip history you can replay any charter point by point: where the vessel went, how fast, and how long it spent in each area. It is the quickest way to settle a route dispute or verify a return.',
                ],
            },
            {
                kind: 'vatReport',
                title: 'Automated VAT trip reports',
                body: [
                    'For Greek charter operators, the platform produces weekly VAT trip reports in line with ΠΟΛ.1240/2018, calculating the share of every trip spent inside and outside the regulated nautical-mile zones, automatically, and emailing them as archive-ready PDFs.',
                ],
                desc: 'Every island with a major port base is pre-mapped, so the platform calculates the percentage of each trip inside and outside the regulated nautical-mile zones without any manual coordinate work. See the dedicated sailboat VAT tracking page for the full breakdown.',
            },
            {
                kind: 'prose',
                title: 'Bring your own devices',
                body: [
                    'Charter fleets rarely run identical hardware. Our platform supports around 95% of the GPS trackers on the market, so a mixed fleet can be unified under one account without re-equipping every boat.',
                ],
            },
        ],
        faq: [
            {
                q: 'Can I manage a mixed fleet of different GPS devices?',
                a: 'Yes. The platform is compatible with roughly 95% of GPS trackers on the market, so vessels with different hardware can all be managed from one account.',
            },
            {
                q: 'Does it produce the VAT reports Greek charter companies need?',
                a: 'Yes. The platform generates automated weekly VAT trip reports aligned with the Greek regulation ΠΟΛ.1240/2018, including the nautical-mile zone calculations, delivered as a PDF by email.',
            },
            {
                q: 'Can each client or captain have their own login?',
                a: 'Yes. Administrators can create sub-users with credentials limited to selected vessels or groups of vessels.',
            },
        ],
        related: [
            { href: '/sailboat-vat-tracking', label: 'Sailboat VAT tracking (ΠΟΛ.1240/2018)' },
            { href: '/yacht-tracking', label: 'Yacht tracking' },
            { href: '/product-boat', label: 'Boat & yacht GPS tracking platform' },
        ],
    },

    'jet-ski-tracker': {
        metaTitle: 'Jet Ski GPS Tracker',
        metaDescription:
            'GPS tracking for jet skis and personal watercraft: anti-theft alerts, geo-fenced harbour zones, rental monitoring and real-time location on any device.',
        h1: 'Jet Ski GPS Tracker',
        jsonLd: {
            name: 'KentallTech Jet Ski GPS Tracker',
            description:
                'GPS tracking and anti-theft monitoring for jet skis and personal watercraft, with geo-fenced zones, rental oversight and real-time location.',
        },
        subtitle:
            'Keep your watercraft on the map and get an instant alert the moment something is wrong, with anti-theft monitoring on any web-enabled device.',
        features: [
            { label: 'anti-theft alerts', icon: 'bell' },
            { label: 'real-time tracking', icon: 'map' },
            { label: 'geo-fenced harbour zones', icon: 'lock' },
            { label: '6 months trip history', icon: 'clock' },
        ],
        blocks: [
            {
                kind: 'prose',
                title: 'Anti-theft, in real time',
                body: [
                    'Get notified the moment your jet ski moves when it should be still, or leaves the harbour zone you defined. Live position is always one tap away on the map, on web or mobile.',
                    {
                        list: [
                            'Movement alerts when the watercraft is meant to be parked',
                            'Geo-fenced harbour and beach zones with exit notifications',
                            'Real-time location on any web-enabled device',
                        ],
                    },
                ],
            },
            {
                kind: 'fleetMap',
                title: 'Every unit, live on the map',
                body: [
                    'See your watercraft live with its real-time status, and set the geo-fenced zones that trigger an alert on exit. For rental operators, every unit becomes a monitored, accountable asset on one screen.',
                ],
            },
            {
                kind: 'photoGrid',
                title: 'Built for rentals',
                body: [
                    'Running a rental operation? Keep a six-month history of where each unit has been and replay trips to confirm renters stayed within agreed areas and speeds.',
                ],
            },
            {
                kind: 'prose',
                title: 'One platform for the whole fleet',
                body: [
                    'Manage jet skis alongside your boats and other assets in a single account. The platform supports around 95% of GPS devices on the market, so you can equip new units or connect ones you already own.',
                ],
            },
        ],
        faq: [
            {
                q: 'Will I be alerted if my jet ski is moved?',
                a: 'Yes. You can configure movement and geo-fence alerts so you are notified immediately, on-screen and by email, if the watercraft moves or leaves a defined zone.',
            },
            {
                q: 'Can I monitor a fleet of rental jet skis?',
                a: 'Yes. Every unit can be tracked live and reviewed through up to six months of trip history, all from one account, which is ideal for rental operators.',
            },
        ],
        related: [
            { href: '/yacht-tracking', label: 'Yacht tracking' },
            { href: '/product-boat', label: 'Boat & yacht GPS tracking platform' },
            { href: '/product-moto', label: 'Motorcycle GPS tracking' },
        ],
    },

    'sailboat-vat-tracking': {
        metaTitle: 'Sailboat VAT Tracking (ΠΟΛ.1240/2018)',
        metaDescription:
            'GPS tracking with automated VAT trip reports for chartered sailboats and yachts under the Greek regulation ΠΟΛ.1240/2018. Nautical-mile zone calculations, ready-to-file PDFs.',
        h1: 'Sailboat VAT Tracking (ΠΟΛ.1240/2018)',
        jsonLd: {
            name: 'KentallTech Sailboat VAT Tracking',
            description:
                'Automated VAT trip reports for chartered sailboats and yachts aligned with the Greek regulation ΠΟΛ.1240/2018, including nautical-mile zone calculations.',
        },
        subtitle:
            'Automated VAT trip reports for chartered sailboats and yachts (μισθωμένο σκάφος), aligned with the Greek regulation ΠΟΛ.1240/2018, with the nautical-mile zones worked out for you.',
        features: [
            { label: 'automated VAT reports', icon: 'doc' },
            { label: 'pre-mapped port zones', icon: 'map' },
            { label: '6 months trip history', icon: 'clock' },
            { label: 'ready-to-file PDFs', icon: 'shield' },
        ],
        blocks: [
            {
                kind: 'prose',
                title: 'What the ΠΟΛ.1240/2018 report needs',
                body: [
                    'Documenting VAT for a chartered sailboat in Greece means proving, trip by trip, how much of each voyage took place inside versus outside defined nautical-mile zones. The regulation requires a movement report (έκθεση πλου) for each trip of a chartered vessel:',
                    {
                        list: [
                            'Timestamps and positions: a recorded track of when and where the vessel travelled',
                            'Zone breakdown: the share of the voyage spent inside and outside the relevant nautical-mile zone',
                            'Per-trip evidence: a record you can archive and submit as supporting documentation for VAT (ΦΠΑ)',
                        ],
                    },
                    'Done by hand from raw coordinates, this is slow and error-prone. KentallTech automates the whole thing.',
                ],
            },
            {
                kind: 'vatReport',
                title: 'Every port zone is pre-mapped',
                body: [
                    'We have mapped the nautical-mile zones around every island and major port base used for this purpose. Schedule a weekly VAT report per vessel and it is generated and emailed to you automatically as an archive-ready PDF, with the trips, timestamps, positions and zone percentages already worked out.',
                ],
                desc: 'The platform measures each trip against the regulated zones and calculates the percentage of the voyage inside and outside them, with no manual coordinate work. Combined with up to six months of replayable trip history, your charter logbook (ημερολόγιο πλου) is backed by a complete, verifiable record.',
            },
            {
                kind: 'photoGrid',
                title: 'Backed by six months of trip history',
                body: [
                    'Every VAT report is supported by replayable trip history for up to six months. Inspect any voyage point by point, with speed, coordinates and engine status at each step, so the evidence behind every report is always there.',
                ],
            },
            {
                kind: 'prose',
                title: 'A specialisation competitors do not offer',
                body: [
                    'General marine trackers show you a map. The Greek charter VAT workflow, the ΠΟΛ.1240/2018 zone calculations and the ready-to-file reporting are a specialisation we built specifically for the Greek market, and it is a large part of why so many Greek charter operators run their fleets on KentallTech.',
                ],
            },
        ],
        faq: [
            {
                q: 'What is the ΠΟΛ.1240/2018 report for chartered boats?',
                a: 'ΠΟΛ.1240/2018 is the Greek regulation governing movement reports (εκθέσεις πλου) for chartered vessels. It requires recording each trip’s timestamps and positions and the share of the voyage inside and outside defined nautical-mile zones, which affects how the charter is treated for VAT.',
            },
            {
                q: 'Does the platform calculate the nautical-mile zones automatically?',
                a: 'Yes. We have pre-mapped the nautical-mile zones around every relevant island and port. The platform measures each trip against them and calculates the inside/outside percentages automatically, so no manual coordinate work is needed.',
            },
            {
                q: 'How do I receive the VAT report?',
                a: 'A weekly VAT trip report can be scheduled per vessel and is generated automatically, then emailed to you as an archive-ready PDF that you can submit for VAT purposes.',
            },
            {
                q: 'Can I use it as a charter logbook?',
                a: 'Yes. Combined with up to six months of replayable trip history, the reports give you a complete, verifiable record that supports your charter logbook (ημερολόγιο πλου).',
            },
        ],
        related: [
            { href: '/charter-fleet-tracking', label: 'Charter fleet tracking' },
            { href: '/guides/charter-vat-pol-1240', label: 'Guide: Charter VAT & ΠΟΛ.1240/2018' },
            { href: '/product-boat', label: 'Boat & yacht GPS tracking platform' },
        ],
    },
}

export const useCaseSlugs = Object.keys(useCases)

export const findUseCase = (slug) => useCases[slug]
