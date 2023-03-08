import PageTitle from '../../components/PageTitle/PageTitle'
import Services from '../../components/Services/Services'

import './about.css'

export default function About() {

  return (
    <div>
      <PageTitle title="About Kental Tech Ltd." />
        <div className="landing-page">
          <Services />
        </div>
    </div>
  )
}