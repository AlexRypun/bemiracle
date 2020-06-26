import { EntityWithTranslations, Translation } from './common';

export interface CategoryTranslation extends Translation {
  id: number;
  name: string;
}

export interface Category extends EntityWithTranslations {
  id: number;
  translations: CategoryTranslation[];
  parentId: number | null;
  parent?: Category | null;
  children?: Category[];
}
