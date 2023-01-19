type Columns = Array<{
  id: number;
  title: string;
}>

class StorageService {
  private readonly userNameKey = 'user-name';
  private readonly columnKey = 'column-title';

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
}

export default new StorageService();