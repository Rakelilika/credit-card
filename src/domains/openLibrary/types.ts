//marcamos un una '?' las propiedades que pueden no estar definidas
export type Book = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
};

export type Description = {
  key: string;
  title: string;
  description: string | null;
};

export type Rating = {
  value: string | null;
};

export interface Edition {
  key: string;
  title: string;
  subtitle: string;
  publish_date?: string;
  publishers?: string[];
  isbn_10?: string[];
  isbn_13?: string[];
  number_of_pages?: number;
  weight?: number;
  physical_format?: string;
}