type KanbanItem = {
  publication_id: string;
  process_number: string;
  publication_date: string;
  author: string;
  lawyer: string;
  content: string;
  principal_value: string;
  interest_value: string;
  lawyer_fees: string;
  defendant: string;
  status: "new" | "read" | "sent_to_lawyer" | "completed";
  created_at: string;
  updated_at: string;
};

type KanbanColumnType = {
  title: string;
  type: "new" | "read" | "sent_to_lawyer" | "completed";
  items: KanbanItem[];
};

type KanbanColumns = {
  [key: string]: KanbanColumnType;
};

export type ColumnsProps = KanbanColumns | null;
export type SelectedProps = any | null;
export type SearchProps = any | null;
export type DateProps = any | null;

export type KanbanContextProps = {
  columns: ColumnsProps | null;
  setColumns: React.Dispatch<React.SetStateAction<ColumnsProps | null>>;

  selected: SelectedProps | null;
  setSelected: React.Dispatch<React.SetStateAction<SelectedProps | null>>;

  search: SearchProps | null;
  setSearch: React.Dispatch<React.SetStateAction<SearchProps | null>>;

  startDate: DateProps | null;
  setStartDate: React.Dispatch<React.SetStateAction<DateProps | null>>;

  endDate: DateProps | null;
  setEndDate: React.Dispatch<React.SetStateAction<DateProps | null>>;

  refresh: () => void;
};
