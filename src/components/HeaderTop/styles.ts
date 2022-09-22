import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 100px;
    justify-content: flex-end;
    padding-left: 10px;
`;
export const Navbar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
`;