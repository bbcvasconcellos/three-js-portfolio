import { ToastContainer, ToastMessage, ToastProgressBar, ToastWrap } from "./styles";

interface ToastProps {
  duration: number;
  message: string;
}

export const Toast = ({ duration, message }: ToastProps) => (
  <ToastContainer duration={duration}>
    <ToastWrap>
      <ToastMessage>{message}</ToastMessage>
    </ToastWrap>
      <ToastProgressBar duration={duration}/>
  </ToastContainer>
)