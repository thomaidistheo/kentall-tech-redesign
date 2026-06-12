// Wiki content for the /guides page.
// Each article: slug (used in the URL), title, and an array of paragraphs.
// Edit or extend the copy freely — the layout adapts automatically.

export const guideCategories = [
    {
        title: 'Getting Started',
        articles: [
            {
                slug: 'login',
                title: 'Login',
                paragraphs: [
                    'The Kentall tracking platform is available at www.kentalltrack.com from any modern browser, and through the GPS Monitor Plus app on iOS and Android.',
                    'Log in with the username and password you received when your account was created. If you have not received credentials yet, contact us at info@kentall-tech.com and we will set up your account.',
                    'If you forget your password, use the "Forgot password" option on the login screen to receive a reset link by email.',
                ],
            },
            {
                slug: 'map-view',
                title: 'Map View',
                paragraphs: [
                    'After logging in you land on the live map. Every asset on your account is shown at its last reported position.',
                    'The marker color reflects the real-time status of each asset: moving, stationary, last report time, or disconnected.',
                    'Use the search field to find a specific asset by name, and the layer switch to toggle between the standard map and satellite view.',
                ],
            },
            {
                slug: 'asset-info',
                title: 'Asset Info',
                paragraphs: [
                    'Select any asset on the map to open its information panel.',
                    'The panel shows the asset’s current status, speed, ignition state, odometer, and the time of its last report.',
                    'From here you can jump straight to the asset’s trips, zones, and alerts without leaving the map.',
                ],
            },
        ],
    },
    {
        title: 'Asset Tracking',
        articles: [
            {
                slug: 'trip-replay',
                title: 'Trip Replay',
                paragraphs: [
                    'Trip Replay lets you view your assets’ past trips for up to 6 months.',
                    'Select an asset, pick a date, and choose a trip from the list to draw its full route on the map.',
                    'This is perfect to confirm the route a client followed or to inspect whether the asset has been close to dangerous zones.',
                ],
            },
            {
                slug: 'trip-info',
                title: 'Trip Info',
                paragraphs: [
                    'Every step of a trip records detailed telemetry: speed, coordinates, and engine status.',
                    'Open a trip to see its distance, duration, average and maximum speed, and any speed limit violations.',
                    'Use the timeline slider to move through the trip point by point and inspect the recorded values at each position.',
                ],
            },
        ],
    },
    {
        title: 'Data Reports',
        articles: [
            {
                slug: 'trip-reports',
                title: 'Trip Reports',
                paragraphs: [
                    'Schedule automated Weekly Summary Reports for your assets to monitor the trips of the week.',
                    'Reports include every trip with accurate data on the map: speed limit violations, average speed, and trip distance.',
                    'Reports are delivered to your email automatically — set them up once per asset and stay informed without logging in.',
                ],
            },
            {
                slug: 'vat-special-report',
                title: 'Sailboat/Yacht VAT Special Report',
                paragraphs: [
                    'For sailboats and yachts, the platform can produce a special report tailored to VAT documentation requirements.',
                    'The report records the vessel’s trips with timestamps and positions, providing the supporting evidence typically requested for VAT purposes.',
                    'Contact us at info@kentall-tech.com if you need help configuring the VAT special report for your vessel.',
                ],
            },
        ],
    },
]

// Flat lookup helpers
export const allGuides = guideCategories.flatMap((cat) => cat.articles)

export const findGuide = (slug) => allGuides.find((a) => a.slug === slug)
