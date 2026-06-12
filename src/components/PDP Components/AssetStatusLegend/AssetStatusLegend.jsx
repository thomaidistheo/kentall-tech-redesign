import React from 'react'
import {
    PlayCircleIcon,
    StopCircleIcon,
    ClockIcon,
    SignalSlashIcon,
} from '@heroicons/react/24/outline'

import './AssetStatusLegend.scss'

// Shared real-time status legend used by every product page. The
// surrounding `.image-container .section.big-features` styling lives in
// each PDP's stylesheet; this component only owns the icon look.
const statuses = [
    { Icon: PlayCircleIcon, label: 'Moving', modifier: 'moving' },
    { Icon: StopCircleIcon, label: 'Stationary', modifier: 'stationary' },
    { Icon: ClockIcon, label: 'Last report', modifier: 'last-report' },
    { Icon: SignalSlashIcon, label: 'Disconnected', modifier: 'disconnected' },
]

function AssetStatusLegend() {
    return (
        <div className="section big-features">
            <h3 className="features-title">Real-time status</h3>

            {statuses.map(({ Icon, label, modifier }) => (
                <div className="feature" key={label}>
                    <div className={`feature--icon status-${modifier}`}>
                        <Icon />
                    </div>
                    <div className="feature--text">{label}</div>
                </div>
            ))}
        </div>
    )
}

export default AssetStatusLegend
