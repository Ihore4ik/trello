export interface IList {
  id: number;
  name: string;
}

export interface Task {
  id: number;
  name: string;
  description: string;
  priority: string;
  status: string;
  date: string;
}

export interface IFormData {
  name: string;
}

export interface IFormDataCard {
  task: {
    name: string;
    description: string;
    priority: string;
    status: string;
    date: string;
  };
}
