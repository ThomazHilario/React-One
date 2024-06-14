import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:30px 0px;

    /* img */
    img{
        height:50px
    }

    & > .container__input{
        border-radius: 5px;
        overflow: hidden;
    }

    & > .container__input > .radius{
        display: flex;
        justify-content: center;
        align-items: center;

        border: 3px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);

        padding: 0px 10px;
    }

    /* Input */
    & > .container__input > .radius > input{
        padding: 8px 0px;
        width: 23vw;
        background-color: transparent;
        color: rgba(217, 217, 217, 1);
        outline: none;
        border: 0px;
    }
`