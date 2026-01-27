import { MainLayout } from '@/components/layouts'
import { generateMeta } from '@/lib/utils'
import { Homepage } from '@/modules/Homepage'

export async function generateMetadata() {
  return generateMeta({
    title: 'Homepage',
    description:
      "Sovinens is a digital marketing agency that helps businesses to grow their online presence.",
    canonical: '/',
  })
}

export default function Home() {
  return (
    <MainLayout>
      <Homepage />
    </MainLayout>
  )
}
