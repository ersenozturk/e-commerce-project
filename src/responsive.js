import { css } from "@emotion/react"

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 660px) {
         ${props}   
        }
    `
}

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 824px) {
         ${props}   
        }
    `
}