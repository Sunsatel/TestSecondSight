import { Title } from "../lib"
import tw from 'tailwind-styled-components'

const DetailView = () => {
    return (
        <DetailWrapper>
            <DetailPannel>
                <PanelHeader>
                    <h1>Details</h1>
                </PanelHeader>
                <PanelContent>
                    {detailMenu.map(item => (
                        <DetailItem key={item.title} title={item.title} val={item.value}/>
                    ))}
                </PanelContent>
            </DetailPannel>
        </DetailWrapper>
    )
}

const DetailItem = ({title, val}) => {
    return (
        <div className="flex justify-between pb-2 mb-3 text-xs border-b border-white">
            <p>{title}</p>
            <p>{val}</p>
        </div>
    )
}

const PanelContent = tw.div`
    p-3 px-10 flex flex-col
`

const DetailWrapper = tw.div`
  w-1/2
`

const PanelHeader = tw.div`
    p-3
`

const DetailPannel = tw.div`
    m-auto bg-slate-800 mt-10 mx-3 rounded
`

const detailMenu = [
    {title: 'Daily\'s Range', value: "128.46-130.89"},
    {title: '52 Week Range', value: "86.29-145.09"},
    {title: 'Company Score', value: "89%"},
    {title: 'Revenue Protection', value: "$1,400,000"},
    {title: 'Revenue Loss Potential', value: "$4,400,000"},
    {title: 'Redundant', value: "20%"},
    {title: 'Encrypted', value: "60%"},
    {title: 'Sensitive', value: "4.45"},
    {title: 'Intelligent Airgap', value: "30%"},
    {title: 'Number of Assets', value: "30%"},
]

export default DetailView