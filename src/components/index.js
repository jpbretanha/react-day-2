import styled from 'styled-components'

export const Logo = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`

export const Image = styled.img`
  height: ${({height}) => height};
  width: ${({width}) => width};
  margin: 10px 30px;
  ${({custom}) =>
    custom && custom
  }
`
export const Row = styled.div`
    display: flex;
    align-items: ${({align}) => align || 'flex-start'};
    justify: ${({justify}) => justify || 'center'};
`

export const Grid = styled.div`
    ${({width}) => width && `width: ${width}`}
    display: flex;
    flex-direction: ${({direction}) => direction || 'row'};
    align-items: ${({align}) => align || 'flex-start'};
    justify-content: ${({justify}) => justify || 'center'};
`