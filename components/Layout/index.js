import tw from 'tailwind-styled-components'
import TopNav from '../TopNav'

const Layout = ({children}) => {
    return (
        <LayoutContainer>
            <TopNav/>
            {children}
        </LayoutContainer>
        
    )
}


const LayoutContainer = tw.div`
  max-w-normal m-auto
`
export default Layout