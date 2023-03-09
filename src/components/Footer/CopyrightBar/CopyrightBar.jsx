import React from 'react'

import '../CopyrightBar/copyrightbar.css'

function CopyrightBar() {
    let currentYear = new Date().getFullYear();

    return (
        <div class="copyright-bar">
            Copyright © {currentYear} Thomaidis Theodoros Georgios | Kentall Tech Greece - All rights reserved
        </div>
    )
}

export default CopyrightBar