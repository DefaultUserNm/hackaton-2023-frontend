import * as React from "react";
import { FC } from "react";
import { BoxTeamPreview } from "./BoxTeam/BoxTeamPreview";
import { BoxComponentPreview } from "./BoxComponent/BoxComponentPreview";
import {ProductComponent, User} from "../../services/api";


interface BoxPreviewProps {
  title: string;
  type: string;
  id: string;
  description?: string;
  leader?: string;
  total?: number;
  members?: User[];
  productComponents?: ProductComponent[];
}

export const BoxPreview: FC<BoxPreviewProps> = (props) => {
  const { type, leader, title, total, members, productComponents } = props;

  switch (type) {
    case "team":
      return null;
      //   <BoxTeamPreview
      //     leader={leader}
      //     members={members}
      //     total={total}
      //     title={title}
      //   />
      // );
    case "component":
      return null;
        // <BoxComponentPreview
          // productComponents={productComponents}
          // total={total}
          // title={title}
        {/*/>*/}
      ;
    default:
      return <div>unknown</div>;
  }
};
