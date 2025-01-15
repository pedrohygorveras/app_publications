export type TypeProps = string | null;

export type TitleProps = string | null;

export type MessageProps = string | null;

export type AlertContextProps = {
  typeAlert: TypeProps | null;
  setTypeAlert: React.Dispatch<React.SetStateAction<TypeProps | null>>;

  titleAlert: TitleProps | null;
  setTitleAlert: React.Dispatch<React.SetStateAction<TitleProps | null>>;

  messageAlert: MessageProps | null;
  setMessageAlert: React.Dispatch<React.SetStateAction<MessageProps | null>>;
};
