import { atom } from 'recoil';

export interface ILatestBook {
  itemId: number;
  title: string;
  cover: string;
}

/**
 * 최근 본 책 목록 (10개)
 */
export const latestBookListState = atom<ILatestBook[]>({
  key: 'latestBookList',
  default: [],
});
