import { useState } from "react";
import { Container, LeftSide, List, ListItem, RightSide, Section } from "./styles";
import { WebDesign } from "../WebDesign";
import { ProductDesign } from "../ProductDesign";
import { Development } from "../Development";
import { Analytics } from "../Analytics";
import { DialogBox } from "../DialogBox";
import { Descriptions } from "../../utils/descriptions";

interface RenderItemProps {
  item: string;
}

export const Portfolio: React.FC<{}> = () => {
  const [work, setWork] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const data = [
    "Web Design",
    "Development",
    "Product Design",
    "Analytics"
  ];

  const RenderItem: React.FC<RenderItemProps> = ({ item }: RenderItemProps) => {
    let component: JSX.Element;

    switch(item) {
      case "Web Design":
        component = <WebDesign />;
        setDescription(Descriptions.webDesign);
        break;
      case "Product Design":
        component = <ProductDesign />;
        setDescription(Descriptions.productDesign);
        break;
      case "Development":
        component = <Development />;
        setDescription(Descriptions.development);
        break;
      case "Analytics":
        component = <Analytics />;
        setDescription(Descriptions.analytics);
        break;
      default:
        component = <></>;
        break;
    }

    return (
      <>
        {component}
      </>
    )
  }

  return (
    <Section>
      <LeftSide>
        <List>
          {data.map(item => 
            <ListItem 
              key={item} 
              title={item}
              onClick={() => setWork(item)}
            >
              {item}
            </ListItem>
          )}
        </List>
      </LeftSide>
      <RightSide>
        <Container>
          <RenderItem item={work} />
          {work ? <DialogBox messageContent={description}/> : <></>}
        </Container>
      </RightSide>
    </Section>
)}