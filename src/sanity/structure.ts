import { StructureBuilder } from 'sanity/desk';

export const structure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Orders')
        .child(S.documentTypeList('order').title('Orders')),
      S.listItem()
        .title('Products')
        .child(S.documentTypeList('products').title('Products')),
    ]);
};