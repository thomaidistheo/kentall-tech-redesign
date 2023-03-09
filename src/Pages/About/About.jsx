import PageTitle from '../../components/PageTitle/PageTitle'
import Services from '../../components/Services/Services'

import './about.css'

export default function About() {

  return (
    <div>
        <div className="landing-page">
          <PageTitle title="About Kental Tech Ltd." />
          <Services />
        </div>
    </div>
  )
}