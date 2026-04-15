import { type SchemaTypeDefinition } from 'sanity'
import header from './header'
import footer from './footer'
import banner from './banner'
import skillSlider from './skillSlider'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, footer, banner, skillSlider],
}
