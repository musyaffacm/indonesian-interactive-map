export type DataInterface = {
  id: number;
  description: string;
  color?: string;
};

export type MapProps = {
  data: DataInterface[];
  provinceColor?: string;
  provinceHoverColor?: string;
};
