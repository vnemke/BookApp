import { Author } from '../authors/Author';
import { Genre } from '../genres/Genre'

export interface Book {
    id?: number;
    bookName: string;
    Authors: Array<Author>;
    Genres: Array<Genre>;
    Publisher: any;
    releaseYear: string;
    price: string;
    description: string;
}
