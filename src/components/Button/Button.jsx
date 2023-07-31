import { StyledButton } from './StyledButton';

export const Button = ({ onSubmit, query }) => {
  return (
    <StyledButton onClick={() => onSubmit(query)} type="button">
      Load more
    </StyledButton>
  );
};
