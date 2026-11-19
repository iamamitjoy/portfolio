import PageSection from '../components/PageSection'
import Timeline from '../components/Timeline'
import { work } from '../data/site'

export default function Experience() {
  return (
    <PageSection id="experience">
      <Timeline items={work} />
    </PageSection>
  )
}
