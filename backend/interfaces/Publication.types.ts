import { Status } from "@prisma/client";

interface PublicationGetAllProps {
  limit?: any;
  index?: any;
  search?: any;
  start_date?: any;
  end_date?: any;
  status?: any;
}

interface PublicationCreateProps {
  process_number?: string | null;
  publication_date?: string | null;
  author?: string | null;
  lawyer?: string | null;
  content?: string | null;
  principal_value?: number | null;
  interest_value?: number | null;
  lawyer_fees?: number | null;
}

interface PublicationUpdateProps {
  process_number?: string | null;
  publication_date?: string | null;
  author?: string | null;
  lawyer?: string | null;
  content?: string | null;
  principal_value?: number | null;
  interest_value?: number | null;
  lawyer_fees?: number | null;
  defendant?: string | null;
  status?: Status;
}

export {
  PublicationGetAllProps,
  PublicationCreateProps,
  PublicationUpdateProps,
};
