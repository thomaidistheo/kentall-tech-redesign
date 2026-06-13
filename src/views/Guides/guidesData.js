// Wiki content for the /guides page.
// Each article: slug (used in the URL), title, and an array of blocks.
// A block is one of:
//   - a string                  -> paragraph
//   - { list: [...] }           -> bullet list ("Term: explanation" items get a bold term)
//   - { img: N, caption: '..' } -> image slot number N (see guideImages below)
//
// Content translated/adapted from the Kentall Tech fleet-management
// brochure (GR).

// IMAGE SLOTS ---------------------------------------------------------
// Until a real image is provided, each slot renders as a numbered
// placeholder. To activate one: import the file and replace its null.
// A slot can hold a single image or an array of images; arrays render
// side by side in a horizontal row.
//
//  #1  Login: the kentalltrack.com login screen
//  #2  Map View: live map with the whole fleet visible
//  #3  Map View: right-edge toolbar close-up (ruler, geo-zones, search, map type)
//  #4  Map View: on-screen alerts window in the bottom-right corner
//  #5  Asset Info: the asset information panel (speed, status, battery...)
//  #6  Asset Info: the quick tools in the asset tooltip (Trail, Trip, StreetView...)
//  #7  Trip Replay: a replayed trip drawn point by point on the map
//  #8  Trip Replay: multiple assets replayed together
//  #9  Trip Info: trip list for a day with stats (distance, duration, speeds)
//  #10 Trip Reports: Weekly Summary Report PDF example
//  #11 Trip Reports: graphical Trip Listing report on the map
//  #12 Trip Reports: the "Create a Custom Report" dialog
//  #13 VAT Report: Sailboat/Yacht VAT special report example
import img1 from '../../assets/guides/01.jpg'
import img2a from '../../assets/guides/02-1.jpg'
import img2b from '../../assets/guides/02-2.jpg'
import img3a from '../../assets/guides/03-1.jpg'
import img3b from '../../assets/guides/03-2.jpg'
import img3c from '../../assets/guides/03-3.jpg'
import img4 from '../../assets/guides/04.png'
import img5 from '../../assets/guides/05.jpg'
import img6 from '../../assets/guides/06.png'
import img7 from '../../assets/guides/07.jpg'
import img8 from '../../assets/guides/08.jpg'
import img9 from '../../assets/guides/09.jpg'

export const guideImages = {
    1: img1,
    2: [img2a, img2b],
    3: [img3a, img3b, img3c],
    4: img4,
    5: img5,
    6: img6,
    7: img7,
    8: img8,
    9: img9,
    10: null,
    11: null,
    12: null,
    13: null,
}

export const guideCategories = [
    {
        title: 'Getting Started',
        articles: [
            {
                slug: 'login',
                title: 'Login',
                blocks: [
                    'The Kentall tracking platform is hosted in the cloud and is available at www.kentalltrack.com from any modern browser, on PC or smartphone: there is nothing to install. Native apps are also available on the App Store and Google Play.',
                    { img: 1, caption: 'The kentalltrack.com login screen' },
                    'Log in with the username and password you received when your account was created. Multiple users can be signed in at the same time, and account administrators can create sub-users with their own credentials and access limited to selected groups of vessels or vehicles.',
                    'Because the platform is cloud hosted, it is upgraded regularly without downtime or any reinstallation on your side: new features appear automatically for all users.',
                    'If you have not received credentials yet, contact us at info@kentall-tech.com and we will set up your account.',
                ],
            },
            {
                slug: 'map-view',
                title: 'Map View',
                blocks: [
                    'As soon as you log in you have access to all of your vessels and vehicles, shown live on the map with their status updated in real time.',
                    { img: 2, caption: 'The live map with your whole fleet' },
                    'The toolbar on the right edge of the screen holds the quick map tools:',
                    {
                        list: [
                            'Ruler: measure distances directly on the map',
                            'Geo-zones: draw geographic boundaries (geofences) around areas you care about',
                            'Area search: search for places and regions',
                            'Nearest asset: locate the closest vessel/vehicle to a point',
                            'Map type: switch between Google Maps street and satellite view, Open Street Maps and more',
                        ],
                    },
                    { img: 3, caption: 'The quick map tools on the right edge of the screen' },
                    'If you hold the rights to another map provider, we can integrate it as a third-party map on request.',
                    'The notifications window sits in the bottom-right corner. When an event you have configured triggers, the window opens automatically with an alarm sound so nothing slips by.',
                    { img: 4, caption: 'On-screen alerts in the bottom-right corner' },
                ],
            },
            {
                slug: 'asset-info',
                title: 'Asset Info',
                blocks: [
                    'Click on any vessel or vehicle on the map to open its information panel. Everything you need is available at a glance:',
                    {
                        list: [
                            'Speed (km/h or knots)',
                            'Status: moving, parked or idle',
                            'Battery level (where the device supports it)',
                            'Time of the last reported position',
                            'Current location',
                            'Latitude and longitude',
                            'Odometer',
                        ],
                    },
                    { img: 5, caption: 'The asset information panel' },
                    'These quick tools are available in the asset tooltip that opens on the map when you select an asset, top to bottom:',
                    {
                        list: [
                            'Trail: shows the “tail” of the asset’s recent route',
                            'Trip: takes you to the asset’s trip history page',
                            'StreetView: opens Street View at the asset’s current location',
                            'Directions: Google Maps directions to the vessel/vehicle',
                            'Zoom: zooms the map in, centered on the selected asset',
                        ],
                    },
                    { img: 6, caption: 'The quick tools in the asset tooltip' },
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
                blocks: [
                    'Every vessel and vehicle can replay its past trips for a day, a week, a month, or any period between two dates, with up to 6 months of trip history.',
                    { img: 7, caption: 'A trip replayed point by point on the map' },
                    'Each trip is replayed from start to stop, drawn point by point on the map. You can replay a single asset or display the trips of multiple vessels/vehicles together.',
                    { img: 8, caption: 'Replaying the trips of multiple assets together' },
                    'This is perfect to confirm the route a client followed, or to inspect whether an asset has been close to dangerous zones.',
                ],
            },
            {
                slug: 'trip-info',
                title: 'Trip Info',
                blocks: [
                    'Open any trip to inspect its details: distance travelled, duration, average and maximum speed, and any speed limit violations.',
                    { img: 9, caption: 'Trip details with distance, duration and speed stats' },
                    'Every recorded point of the trip carries its telemetry (speed, coordinates, and engine status) so you can move through the route step by step and see exactly what was recorded at each position.',
                    'Trips are listed per day with their start/stop times and locations, giving you a quick picture of each day’s activity for every asset.',
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
                blocks: [
                    'Every user can set up their own automated reports for any information about their vessels or vehicles. Reports are created from the REPORTS menu and tailored to your needs:',
                    {
                        list: [
                            'Pick the assets and the date range the report covers',
                            'Schedule the day it is delivered: daily, weekly or monthly',
                            'Optionally record only a specific time window, e.g. working hours 08:00–18:00',
                        ],
                    },
                    { img: 12, caption: 'The “Create a Custom Report” dialog' },
                    'The Weekly Summary Report gathers all the trips of the week for each vehicle/vessel and is emailed to you automatically as a PDF, ready for archiving. A graphical Trip Listing report is also available, presenting the trips drawn on the map.',
                    { img: 10, caption: 'A Weekly Summary Report' },
                    { img: 11, caption: 'A graphical Trip Listing report' },
                    'Weekly movement reports follow the requirements of the Greek regulation ΠΟΛ.1240/2018.',
                ],
            },
            {
                slug: 'vat-special-report',
                title: 'Sailboat/Yacht VAT Special Report',
                blocks: [
                    'For sailboats and yachts, the platform produces a special report tailored to VAT documentation requirements, in line with the Greek regulation ΠΟΛ.1240/2018 on movement reports.',
                    { img: 13, caption: 'A Sailboat/Yacht VAT special report' },
                    'The report records the vessel’s trips with timestamps and positions, providing the supporting evidence typically requested for VAT purposes, and can be scheduled to arrive by email automatically as a PDF for archiving.',
                    'Contact us at info@kentall-tech.com if you need help configuring the VAT special report for your vessel.',
                ],
            },
            {
                slug: 'charter-vat-pol-1240',
                title: 'Charter VAT & ΠΟΛ.1240/2018',
                blocks: [
                    'If you charter out a sailboat or yacht in Greece (μισθωμένο σκάφος), the way each voyage is treated for VAT depends on how much of the trip took place inside versus outside defined nautical-mile zones. The Greek regulation ΠΟΛ.1240/2018 sets out the movement report (έκθεση πλου) you are expected to keep for this.',
                    'This guide explains how the Kentall platform turns that requirement into an automated report, so you do not have to calculate zones from raw coordinates by hand.',
                    'What the regulation expects for each trip:',
                    {
                        list: [
                            'Timestamps and positions: a recorded track of when and where the vessel travelled',
                            'Zone breakdown: the share of the voyage spent inside and outside the relevant nautical-mile zone',
                            'Per-trip evidence: a record you can archive and submit as supporting documentation for VAT (ΦΠΑ)',
                        ],
                    },
                    'How the platform handles it: we have pre-mapped the nautical-mile zones around every island and major port base used for this purpose. For each trip, the platform measures the recorded track against those zones and calculates the inside/outside percentages automatically.',
                    'You can schedule a weekly VAT report per vessel. It is generated and emailed to you as an archive-ready PDF, with the trips, timestamps, positions and zone percentages already worked out. Combined with up to 6 months of replayable trip history, it backs your charter logbook (ημερολόγιο πλου) with a complete, verifiable record.',
                    'For a full overview of this for owners and charter operators, see the dedicated Sailboat VAT tracking page at www.kentall-tech.com/sailboat-vat-tracking. For help configuring it, contact us at info@kentall-tech.com.',
                ],
            },
        ],
    },
]

// Flat lookup helpers
export const allGuides = guideCategories.flatMap((cat) => cat.articles)

export const findGuide = (slug) => allGuides.find((a) => a.slug === slug)
