import {defineType} from 'sanity'

export default defineType({
  name: 'siteBanner',
  title: 'Site Banner',
  type: 'document',
  fields: [
    {
      name: 'pretitle',
      title: 'Pretitle',
      type: 'string',
      description: 'Small introduction text above the main heading',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Hero image displayed on the right side of the banner',
    },
    {
      name: 'secondaryImage',
      title: 'Secondary Banner Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Secondary image shown alongside the main banner image',
    },
    {
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        {name: 'label', type: 'string', title: 'Label', validation: (Rule) => Rule.required()},
        {name: 'href', type: 'string', title: 'Href', validation: (Rule) => Rule.required()},
      ],
    },
    {
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        {name: 'label', type: 'string', title: 'Label', validation: (Rule) => Rule.required()},
        {name: 'href', type: 'string', title: 'Href', validation: (Rule) => Rule.required()},
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'GitHub', value: 'github'},
                  {title: 'Instagram', value: 'instagram'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'href',
            },
          },
        },
      ],
    },
  ],
})
