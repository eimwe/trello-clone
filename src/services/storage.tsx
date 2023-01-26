type Columns = Array<{
  id: number;
  title: string;
}>

type Cards = Array<{
  id: number;
  title: string;
  columnId: number;
}>

interface Card {
  id: number;
  title: string;
  columnId: number;
}

class StorageService {
  private readonly userNameKey = 'user-name';
  private readonly columnKey = 'columns';
  private readonly cardKey = 'cards';

  getUserName() {
    return localStorage.getItem(this.userNameKey);
  }

  setUserName(name: string) {
    localStorage.setItem(this.userNameKey, name);
  }

  getColumns() {
    const columns = localStorage.getItem(this.columnKey);

    return columns ? (JSON.parse(columns) as Columns) : [];
  }

  setColumns(columns: Columns) {
    localStorage.setItem(this.columnKey, JSON.stringify(columns));
  }

  getCards() {
    const cards = localStorage.getItem(this.cardKey);

    return cards ? (JSON.parse(cards) as Cards) : null;
  }

  setCard(card: Card) {
    const exisitingCards = this.getCards();

    localStorage.setItem(this.cardKey, JSON.stringify(exisitingCards ? [...exisitingCards, card] : [card]));
  }
}

export default new StorageService();