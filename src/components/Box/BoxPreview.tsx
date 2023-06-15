import * as React from "react";
import { FC } from "react";
import { BoxTeamPreview } from "./BoxTeam/BoxTeamPreview";
import { BoxComponentPreview } from "./BoxComponent/BoxComponentPreview";

export interface ProductComponent {
  name: string;
  count: number;
}

export interface TeamMember {
  firstName: string;
  lastName: string;
  id: string;
}

interface BoxPreviewProps {
  title: string;
  type: string;
  id: string;
  description?: string;
  leader?: string;
  total?: number;
  members?: TeamMember[];
  productComponents?: ProductComponent[];
}

export const BoxPreview: FC<BoxPreviewProps> = (props) => {
  const { type, leader, title, total, members, productComponents } = props;

  switch (type) {
    case "team":
      return (
        <BoxTeamPreview
          leader={leader}
          members={members}
          total={total}
          title={title}
        />
      );
    case "component":
      return (
        <BoxComponentPreview
          productComponents={productComponents}
          total={total}
          title={title}
        />
      );
    default:
      return <div>unknown</div>;
  }
};
