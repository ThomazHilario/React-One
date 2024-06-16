import styled from "styled-components";

export const Title = styled.h2`
    color: rgba(123, 120, 229, 1);
    font-size: 2rem;
    text-align: ${props => props.$align ? props.$align : ''};
`