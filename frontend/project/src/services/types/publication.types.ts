export type PublicationGetAllProps = {
  limit?: number;
  index?: number;
  search?: string;
  status?: string;
  start_date?: string;
  end_date?: string;
};

export type CreatePublicationProps = {
  process_number?: string;
  publication_date?: string;
  author?: string;
  lawyer?: string;
  content?: string;
  principal_value?: number;
  interest_value?: number;
  lawyer_fees?: number;
  defendant?: string;
  status?: string;
};

export type UpdatePublicationProps = Partial<CreatePublicationProps>;

export type AuthorizationHeader = {
  token: string;
};
