import styled from "styled-components";

let primary_bg = '#383838'
let secondary_bg = '#C3E552'
let gray = '#4C4C4C'

const Container = styled.div`
    background-color: ${primary_bg};
    color: white;
    width: 20%;
    max-width: 300px;
    height: 100vh;
    margin: 0;
    padding: 0 15px 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 100vh;
    min-width: 300px;
    z-index: 20;

    ul {
        padding-top: 15px;
        margin-top: -20px;
        margin-top: 15px;
        overflow-y: scroll;
        max-height: 80vh;
    }
    .path-item {
        display: flex;
        justify-content: space-between;
        align-content: center;
        justify-items: center;
        cursor: pointer;
        margin-bottom: 5px;
        padding: 5px;
        border-radius: 5px;
        transition: all ease-in-out 0.5s;

        &:hover {
            background-color: ${gray};
        }

        img {
            width: 21px;
        }

        .left {
            display: flex;
            justify-items: center;
            font-weight: 900;
            font-size: 9pt;
            font-weight: 100;

            img {
                width: 22px;
                margin: -2px 5px 0 0;
            }
        }
    }
    h3 {
        border-bottom: 4px solid ${gray};
        padding-bottom: 15px;
        padding-top: 10px;
    }
    button {
        color: ${primary_bg};
        background-color: ${secondary_bg};
        border: none;
        width: 100%;
        font-weight: 900;
        border-radius: 6px;
        height: 35px;
        margin-bottom: 10px;
    }
`

export default Container