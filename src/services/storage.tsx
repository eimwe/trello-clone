class StorageService {
  private readonly userNameKey = 'user-name';
  private readonly columnKey = 'column-title';

  getUserName() {
    return localStorage.getItem(this.userNameKey);
  }

  setUserName(name: string) {
    localStorage.setItem(this.userNameKey, name);
  }
}

export default new StorageService();