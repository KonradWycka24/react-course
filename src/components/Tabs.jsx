export default function Tabs( {children, butons, ButtonsContainer = 'menu'}) {
   
   
   return (<>
    <ButtonsContainer>
        {butons}
    </ButtonsContainer>
    {children}
    </>);
}