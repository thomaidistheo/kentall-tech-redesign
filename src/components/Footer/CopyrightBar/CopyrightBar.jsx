import React from 'react'

import '../CopyrightBar/copyrightbar.scss'

function CopyrightBar() {
    let currentYear = new Date().getFullYear();

    return (
        <div className="copyright-bar">
            Copyright © {currentYear} Thomaidis Theodoros Georgios | Kentall Tech Greece - All rights reserved
        </div>
    )
}

export default CopyrightBar