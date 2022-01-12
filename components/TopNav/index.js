import tw from 'tailwind-styled-components'
import {Container, Title, NavUl, NavInput} from '../lib'
import {useState} from 'react'
import Image from 'next/image'
import avatar from '../../public/avatar.png'

import {
    FaAngleDown, FaAngleRight, FaSquarespace, FaShirtsinbulk,
    FaRust, FaStackOverflow, FaStudiovinari, FaWpexplorer, 
    FaYoast, FaYoutubeSquare, FaAnchor, FaAssistiveListeningSystems,
    FaBacon, FaBaby, FaSistrix
} from 'react-icons/fa'

const levelNoraml = 0
const levelMiddle = 1
const levelHight = 2

const TopNav = (userLevel) => {
    userLevel = levelHight
    const [currentItem, setCurrentItem] = useState(0)

    return (
        <nav>
            <MenuContainer type="primary">
                <Container className='flex justify-between'>
                <div className='flex py-3'>
                    <div className='pt-1.5'> <Title>SecondSight</Title> </div>
                    <div className='pt-2 pl-5'>
                        <NavUl>
                            {menuArray.map((menu, index) => (
                                index === currentItem ?
                                <li key={menu} className='flex' onClick={() => {setCurrentItem(index); console.log(index)}}>
                                    <FaAngleDown/>
                                    <div>{menu}</div>
                                </li>
                                : <li key={menu} className='flex' onClick={() => {setCurrentItem(index); console.log(index)}}>
                                    <FaAngleRight/>
                                    <div>{menu}</div>
                                </li>
                            ))}
                        </NavUl>
                    </div>
                </div>
                <div className='flex pt-4'>
                    <div className='relative'><NavInput /><div className='absolute text-black top-1 left-1'><FaSistrix/></div></div>
                    <div className='px-3'>Lisa Jackson</div>
                    <div><Image src={avatar} alt="avatar" width="32px" height="32px" layout='intrinsic'/></div>
                </div>
                </Container>
            </MenuContainer>
            {userLevel >= levelMiddle &&
                <MenuContainer type="primary">
                    <Container className='flex py-5'>
                        <NavUl>
                        { subMenuArray.map((menu, index) => {
                            if (index === currentItem){
                                return menu.value.map((item) =>
                                <li className='flex flex-col transition duration-300 border-b-4 border-black hover:border-emerald-600' key={item.title}>
                                    <div className='m-auto mb-3 text-3xl'>{item.icon}</div>
                                    <div>{item.title}</div>
                                </li>
                                )
                            }
                        })
                        }
                        </NavUl>
                    </Container>
                </MenuContainer>
            }
            
            {userLevel === levelHight && currentItem === 0 &&
                <MenuContainer>
                    <Container className='flex py-5'>
                        <NavUl>
                        {secretMenuArray.map(menu => (
                            <li className='transition duration-300 rounded hover:bg-gray-300 hover:font-bold ' key={menu}>
                                {menu}
                            </li>
                        ))}
                        </NavUl>
                    </Container>
                </MenuContainer>
            }

        </nav>
    )
}

const MenuContainer = tw.div`
    ${(param) => (param.type === "primary"
        ? "bg-black border-b border-b-slate-300 text-white"
        : "bg-white text-black"
    )}
`

const menuArray = [
    "Risk Controls", "Digital Inventory", "Risk Modeling", "Baas", "Roadmap"
]

const subMenuArray = [
    {
        value: [
            {title: "Backup", icon: <FaSquarespace/>},
            {title: "MFA", icon: <FaShirtsinbulk/>},
            {title: "PAM", icon: <FaRust/>},
            {title: "Remote Desktop", icon: <FaStackOverflow/>},
            {title: "Training", icon: <FaStudiovinari/>},
            {title: "Patching", icon: <FaWpexplorer/>},
            {title: "EDR/EXR", icon: <FaYoast/>},
            {title: "Incident Response", icon: <FaYoutubeSquare/>},
            {title: "PEN Testing", icon: <FaAnchor/>},
            {title: "Network Segmentation", icon: <FaAssistiveListeningSystems/>},
            {title: "Sensitive Data", icon: <FaBacon/>},
            {title: "Digital Risk", icon: <FaBaby/>},
        ]
    },
    {
        value: [
            {title: "Remote Desktop", icon: <FaStackOverflow/>},
            {title: "Training", icon: <FaStudiovinari/>},
            {title: "Patching", icon: <FaWpexplorer/>},
            {title: "EDR/EXR", icon: <FaYoast/>},
            {title: "Network Segmentation", icon: <FaAssistiveListeningSystems/>},
            {title: "Sensitive Data", icon: <FaBacon/>},
            {title: "Digital Risk", icon: <FaBaby/>},
        ]
    },
    {
        value: [
            {title: "Remote Desktop", icon: <FaStackOverflow/>},
            {title: "Training", icon: <FaStudiovinari/>},
            {title: "Patching", icon: <FaWpexplorer/>},
            {title: "EDR/EXR", icon: <FaYoast/>},
            {title: "Incident Response", icon: <FaYoutubeSquare/>},
            {title: "PEN Testing", icon: <FaAnchor/>},
        ]
    },
    {
        value: [
            {title: "PAM", icon: <FaRust/>},
            {title: "Remote Desktop", icon: <FaStackOverflow/>},
            {title: "Training", icon: <FaStudiovinari/>},
            {title: "Patching", icon: <FaWpexplorer/>},
            {title: "PEN Testing", icon: <FaAnchor/>},
            {title: "Network Segmentation", icon: <FaAssistiveListeningSystems/>},
            {title: "Sensitive Data", icon: <FaBacon/>},
        ]
    },
    {
        value: [
            {title: "Remote Desktop", icon: <FaStackOverflow/>},
            {title: "Training", icon: <FaStudiovinari/>},
            {title: "Patching", icon: <FaWpexplorer/>},
            {title: "EDR/EXR", icon: <FaYoast/>},
        ]
    },
]

const secretMenuArray = [
    "Airgap", "Encryption", "Scope", "Testing", "Timeliness", "Offsite", "Immutability", "MFA", "Frequency", "Policy"
]
export default TopNav