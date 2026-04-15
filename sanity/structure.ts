import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Global Settings')
        .child(
          S.list()
            .title('Global Settings')
            .items([
              S.documentTypeListItem('siteHeader').title('Header'),
              S.documentTypeListItem('siteFooter').title('Footer'),
            
            ])
        ),

             // ========== HOME PAGE (ONLY FEATURED COLLECTION) ==========
      S.listItem()
        .id("home-page-sections")
        .title("Home Page")
        .child(
          S.list()
            .title("Home Page Sections")
            .items([
                 S.documentTypeListItem('siteBanner').title('Banner'),
                 S.documentTypeListItem('siteSkillSlider').title('Skill Slider'),
            ])
        ),
    ])
