export interface User {
    id: number;
    userName: string;
    userGroups: Array<string>;
    privileges: Array<string>;
  }