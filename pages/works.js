import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbEdvora from '../public/images/edvora.png'
import thumbDivergent from '../public/images/divergent.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="edvora" title="Edvora" thumbnail={thumbEdvora}>
              Edvora is a long-term mission for the future of edtech plus
              inEdvora is a long-term mission for the future of edtech plus in
              education, technology, finance, and enterprise, individually and
              incorporated. Edvora accelerates the pace of transformation with
              recent advancements in emerging technologies. It is the platform
              for everything and everyone to improvise, enhance, and access
              state-of-the-art models thereby redefining the prevailing
              structure with a better quality. education, technology, finance,
              and enterprise, individually and incorporated. Edvora accelerates
              the pace of transformation with recent advancements in emerging
              technologies. It is the platform for everything and everyone to
              improvise, enhance, and access state-of-the-art models thereby
              redefining the prevailing structure with a better quality.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="divergent"
              title="Divergent"
              thumbnail={thumbDivergent}
            >
              Best Quality Products We Print What You Want!
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
