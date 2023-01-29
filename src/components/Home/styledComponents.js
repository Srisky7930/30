import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.isTheme ? '#ffffff' : '#181818')};
  display: flex;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideosContainer = styled.div``

export const VideosOrderList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`

export const InputContainer = styled.div``

export const SearchInput = styled.input``
