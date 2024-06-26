export type ListT = {
  id: number;
  name: string;
};
export type CardT = {
  id: number;
  name: string;
  description: string;
  priority: string;
  status: string;
  date: string;
};

export type ListEditT = {
  id?: number;
  isEdit: boolean;
};
