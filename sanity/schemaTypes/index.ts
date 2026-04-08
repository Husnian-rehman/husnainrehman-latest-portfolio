import { type SchemaTypeDefinition } from 'sanity'
import header from './header'
import footer from './footer'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, footer],
}
