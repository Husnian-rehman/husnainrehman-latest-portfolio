import Banner from '@/components/Banner'
import SkillSlider from '@/components/SkillSlider'
import AboutUs from '@/components/AboutUs'
import { client } from '../sanity/lib/client'
import GET_BANNER from '../sanity/queries/getbanner'
import GET_FOOTER from '../sanity/queries/getfooter'
import GET_SKILL_SLIDER from '../sanity/queries/getskillslider'
import GET_ABOUT_US from '../sanity/queries/getaboutus'
import type { AboutUsProps, BannerProps, SkillSliderProps } from '@/types/type'

export default async function Home() {
  const bannerData = await client.fetch<BannerProps>(GET_BANNER)
  const footerData = await client.fetch(GET_FOOTER)
  const aboutData = await client.fetch<AboutUsProps>(GET_ABOUT_US)
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
      <AboutUs
        title={aboutData?.title}
        description={aboutData?.description}
        experienceText={aboutData?.experienceText}
        image={aboutData?.image}
        link={aboutData?.link}
      />
     
    </main>
  )
}
