import PageSection from '../components/PageSection'
import Timeline from '../components/Timeline'
import { education } from '../data/site'

export default function Education() {
  return (
    <PageSection id="education">
      <Timeline items={education} />
    </PageSection>
  )
}
