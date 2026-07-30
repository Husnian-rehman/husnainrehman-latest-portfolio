import { type SchemaTypeDefinition } from 'sanity'
import header from './header'
import footer from './footer'
import banner from './banner'
import aboutUs from './aboutUs'
import aboutUsBanner from './aboutUsBanner'
import aboutUsEducation from './aboutUsEducation'
import ourServices from './ourServices'
import ourProjects from './ourProjects'
import skillSlider from './skillSlider'
import marquee from './marquee'
import extraSection from './extraSection'
import testimonial from './testimonial'
import video from './video'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, footer, banner, aboutUs, aboutUsBanner, aboutUsEducation, ourServices, ourProjects, skillSlider, marquee, extraSection, testimonial, video],
}
