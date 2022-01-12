import tw from 'tailwind-styled-components'

const Container = tw.div`
    px-10
`

const Title = tw.h1`
    ${(param) => (param.color === 'black'
        ? "text-black" : "text-white"
    )}
    ${(param) => (param.size === 'large'
        ? "text-3xl" : "text-lg"
    )}
)}
    font-bold
`

const NavUl = tw.ul`
    flex text-xs
`

const NavInput = tw.input`
    rounded outline-0 text-gray-500 pl-5 w-40 relative
`

export {Container, Title, NavUl, NavInput}