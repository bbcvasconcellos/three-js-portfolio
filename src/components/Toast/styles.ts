import styled from "styled-components";

interface DurationProps {
  duration: number;
}

export const ToastContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0 5px 0 0;
  background-color: #8f118b;

  animation: showToast ${({ duration }: DurationProps) => duration}s linear
    forwards;

  @keyframes showToast {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const ToastWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 30px;
`;

export const ToastMessage = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const ToastProgressBar = styled.div`
  //position: absolute;
  height: 3px;
  width: 100%;

  background-color: white;

  animation: progressBar ${({ duration }: DurationProps) => duration}s linear
    forwards;

  @keyframes progressBar {
    from {
      margin-right: 0;
    }
    to {
      margin-right: 200%;
    }
  }
`;
