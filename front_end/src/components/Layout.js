import styled from '@emotion/styled'

const Layout = props => <Container>
    {/* Header */}
    {props.children[0]}
    <Grid>

        <GridItem>
        {/* Grid Item 01 */}
        {props.children[1]}
        </GridItem>

        <GridItem>
        {/* Grid Item 02 */}
        {props.children[2]}
        </GridItem>    
            
    </Grid>
    {/* Footer */}
    {props.children[3]}
</Container>

export default Layout;




const Container = styled.div`
max-width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const Grid = styled.div`
width: calc(100% - 6em);
padding: 0 3em;
display: grid;

grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 3em;
`
const GridItem = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;

h4 {
  opacity: 50%;
}
button {
  margin-left: auto;
  margin-top: 0.5em;
}
`