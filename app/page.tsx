import Banner from '@/components/Banner'
import SkillSlider from '@/components/SkillSlider'
import { client } from '../sanity/lib/client'
import GET_BANNER from '../sanity/queries/getbanner'
import GET_FOOTER from '../sanity/queries/getfooter'
import GET_SKILL_SLIDER from '../sanity/queries/getskillslider'
import type { BannerProps, SkillSliderProps } from '@/types/type'

export default async function Home() {
  const bannerData = await client.fetch<BannerProps>(GET_BANNER)
  const footerData = await client.fetch(GET_FOOTER)
  const skillSliderData = await client.fetch<SkillSliderProps>(GET_SKILL_SLIDER)

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
      <SkillSlider data={skillSliderData} />
    </main>
  )
}
