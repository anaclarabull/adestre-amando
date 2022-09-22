import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 100px;
    justify-content: flex-end;
    padding-left: 10px;
`;