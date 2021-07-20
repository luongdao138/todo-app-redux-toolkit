import styled from 'styled-components';
export const Wrapper = styled.div`
          width: 100%;
          border-top: 1px solid #ededed;      
`;

export const Content = styled.div`
         padding: 12px 20px;
         display :flex ;
         width: 100%;
         align-self: center;
         justify-content: ${({justify}: {justify: string}) => justify};
`;

export const Text = styled.span`
    color: var(--text-grey);
    font-size: 14px;

    @media (max-width: 750px) {
      font-size: 12px
    }
`;

export const Button = styled.button`
  background-color: transparent;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 500px) {
    display: ${({disappear}: {disappear: boolean}) => disappear ? 'none' : 'flex'};
  }
`;

export const ButtonFilter = styled(Button)`
   margin: 0 5px;
   padding: 3px 5px;
   border-radius: 4px;
   border: ${({active}: {active: boolean}) => active ? '1px solid var(--title-color)' : '1px solid transparent'};

   :hover {
     border: 1px solid var(--title-color);
   }
`;

export const SmallScreenWrapper = styled(Wrapper)`
   display: none;
   @media (max-width: 500px) {
    display: block
   }
`;

