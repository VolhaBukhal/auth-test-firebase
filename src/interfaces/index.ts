export interface IUserInitialState {
  email: string | null;
  token: string | null;
  id: string | null;
}

export interface IUser {
  email: string;
  accessToken: string;
  uid: string;
}

export interface ITask {
  id: string;
  task: string;
}
