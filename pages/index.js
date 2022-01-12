import { Container } from "../components/lib"
import tw from 'tailwind-styled-components'
import {Title} from '../components/lib'
import PriceTag from "../components/PriceTag"
import DetailView from "../components/DetailView"
import TrendCategory from "../components/TrendCategory"
import {Line} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
import 'chart.js/auto'
Chart.register(ArcElement);


export default function Home() {
  return (
    <HomeWrapper>
      <Container>
        <DigitalOverview/>
        <TrendCategory/>
      </Container>
    </HomeWrapper>
  )
}

const DigitalOverview = () => {
  return (
    <OverviewWrapper>
      <TitleView>
        <Title>Your Digital Asset Portfolio Overview</Title>
      </TitleView>
      <ContentView>
        <PriceView/>
        <DetailView/>
      </ContentView>
    </OverviewWrapper>
  )
}

const PriceView = () => {

  return (
    <div className="w-1/2 ">
      <TotalView>
        <PriceTag title="Dollarized Risk" content="$133.15" val="+0.51(+0.39%)"/>
        <PriceTag title="Company Score" content="89%" val="+0.51(+0.39%)"/>
        <PriceTag title="Revenue Protection" content="$133.15" val="+0.51(+0.39%)"/>
      </TotalView>
      <GraphView>
        <Line data={data}/>
      </GraphView>
    </div>
  )
}

const OverviewWrapper = tw.div`
  text-white flex flex-col justify-between pb-10
`

const TitleView = tw.div`
  border-b border-white pt-5 pb-3
`
const ContentView = tw.div`
  flex
`

const GraphView = tw.div`
  mt-20
`

const TotalView = tw.div`
  grid grid-cols-3 py-3 border-b border-white
`

const HomeWrapper = tw.div`
  bg-gradient-to-b from-gray-700 to-gray-100
`


const data = {
  labels: ['Sep', 'Oct', 'Nov', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 70, 70, 40]
    }
  ]
};