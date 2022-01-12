import {FaArrowUp} from 'react-icons/fa'

const PriceTag = ({title, content, val}) => {
    return (
        <div>
            <h1 className="text-[12px]">{title}</h1>
            <h1 className="text-3xl font-bold">{content}</h1>
            <div className="text-[12px] text-green-300 flex">
                <div className='pt-0.5'><FaArrowUp/></div>
                <h1>{val}</h1>
            </div>
        </div>
    )
}

export default PriceTag