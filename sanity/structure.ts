import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
          .items([
          S.listItem()
        .title("Global Settings")
        .child(
          S.list()
            .title("Global Settings")
            .items([
              S.documentTypeListItem("siteHeader").title("Header"),
              S.documentTypeListItem("siteFooter").title("Footer"),
            ])
        ),
    ])
