import { type SchemaTypeDefinition } from 'sanity'
import header from './header'
import footer from './footer'
import banner from './banner'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, footer, banner],
}
