export const movieSearchAbleFields: string[] = ['title', 'creators'];

export const movieFilterAbleFields: string[] = [
  'searchTerm',
  'title',
  'creators',
  'categoryId',
];
export const movieRelationalFields: string[] = ['categoryId'];
export const movieRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
