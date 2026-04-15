import {defineType} from 'sanity'

export default defineType({
  name: 'siteSkillSlider',
  title: 'Site Skill Slider',
  type: 'document',
  fields: [
    {
      name: 'cards',
      title: 'Slider Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Card Image',
              type: 'image',
              options: {hotspot: true},
            },
            {
              name: 'heading',
              title: 'Main Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'percent',
              title: 'Percent Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'heading',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
})
