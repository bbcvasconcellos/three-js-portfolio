import { Container, Text } from "./styles";

interface DialogBoxProps {
  messageContent: string;
}

export const DialogBox = ({ messageContent }: DialogBoxProps) => {
  return (
    <Container>
      <Text>{messageContent}</Text>
    </Container>
  )
}