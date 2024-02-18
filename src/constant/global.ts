type DataInterface = {
  id: number;
  description: string;
};

export type MapProps = {
  data: DataInterface[];
  provinceColor?: string;
  provinceHoverColor?: string;
};
