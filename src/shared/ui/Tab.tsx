import { useCategoryType } from "@shared/model/CategoryType";
import { ReactNode } from "react";

interface TabProps {
  children: ReactNode;
  type: "all" | "normal" | "special";
}

export const Tab = ({ children, type }: TabProps) => {
  const { setCategoryType } = useCategoryType((state) => state);
  return (
    <>
      <div onClick={() => setCategoryType(type)}>{children}</div>
    </>
  );
};
