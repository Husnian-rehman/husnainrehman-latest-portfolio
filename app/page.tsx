import Banner from '@/components/Banner'
import { client } from '../sanity/lib/client'
import GET_BANNER from '../sanity/queries/getbanner'
import GET_FOOTER from '../sanity/queries/getfooter'
import type { BannerProps } from '@/types/type'

export default async function Home() {
  const bannerData = await client.fetch<BannerProps>(GET_BANNER)
  const footerData = await client.fetch(GET_FOOTER)

  return (
    <main>
      <Banner
        pretitle={bannerData?.pretitle}
        title={bannerData?.title}
        description={bannerData?.description}
        primaryCta={bannerData?.primaryCta}
        secondaryCta={bannerData?.secondaryCta}
        socialLinks={bannerData?.socialLinks || footerData?.socialLinks}
        image={bannerData?.image}
        secondaryImage={bannerData?.secondaryImage}
      />
    </main>
  )
}
