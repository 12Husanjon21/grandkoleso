import { GiCarWheel } from 'react-icons/gi'
import { LuRussianRuble } from 'react-icons/lu'
import {
	PiFlagBannerFoldFill,
	PiSealCheckLight,
	PiTireLight,
} from 'react-icons/pi'
import ImageSwiper from '../components/Corusel/CoruselComponent'
import TireSelection from './AllTiredPage'

const benefitsData = [
	{
		icon: <LuRussianRuble className='text-7xl' />,
		title: 'Низкие цены',
		description:
			'Мы несомненно можем похвастаться низкими ценами на нашу продукцию. Ведь мы являемся официальными дилерами производителей.',
	},
	{
		icon: <PiTireLight className='text-7xl ' />,
		title: 'Широкий ассортимент',
		description:
			'Мы представляем продукцию более 30 фирм-поставщиков товаров и их производителей. Оперативно подберем шины и диски, идеально подходящие именно Вам.',
	},
	{
		icon: <PiFlagBannerFoldFill className='text-7xl' />,
		title: 'Профессионализм',
		description:
			'Наши продавцы-консультанты с удовольствием ответят на все интересующие Вас вопросы, окажут помощь в правильном подборе товара.',
	},
]

const Benefits = () => {
	return (
		<>
			<TireSelection />

			<div className='max-w-7xl mt-12 mb-12 mx-auto px-4 py-10'>
				<span className='m-auto justify-center mb-16 grid'>
					<h2 className='text-3xl font-bold text-start mb-6'>
						Наши <br /> преимущества
					</h2>
					<p className='text-start text-gray-600 mb-10'>
						Покупая шины и диски в Сибирь Колесо, Вы убедитесь, что сотрудничать
						с нами не только выгодно, <br /> но и чрезвычайно удобно. Не
						случайно наш интернет-магазин имеет большое количество
						<br /> постоянных клиентов, с которыми мы благотворно работаем вот
						уже много лет.
					</p>
				</span>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{benefitsData.map((benefit, index) => (
						<div
							key={index}
							className='bg-[#fff] hover:bg-slate-50 duration-500 p-14 rounded border-gray-200 border cursor-pointer text-center'
						>
							<div className='mb-4 text-start grid  items-center gap-8'>
								{benefit.icon}
								<h3 className='text-xl font-semibold mb-2'>{benefit.title}</h3>
							</div>
							<p className='text-gray-600 text-start'>{benefit.description}</p>
						</div>
					))}
				</div>
			</div>

			<div className='max-w-6xl w-[100%] mb-5 mx-auto p-6  '>
				<div className='grid w-[70%]  m-auto justify-center content-center'>
					<span className='mb-12 pl-3 mt-12'>
						<hr className='absolute  border  w-[6%] border-tt border-black' />
					</span>
					<h1 className='text-5xl borer font-semibold m-auto mb-4'>
						Сибирь-Колесо — купите шины <br /> и диски любой конфигурации <br />{' '}
						в Новосибирске
					</h1>
					<p className='mb-12  mt-12 pl-2 w-[120%] text-gray-500'>
						Правильно подобранные, наилучшего качества шины и диски — это залог
						безопасности в пути при плохой <br /> погоде, разбитых дорогах и
						форс-мажорных обстоятельствах. Магазин шин в Новосибирске множество.
						Но <br /> широкий выбор и максимальную надежность предоставляет
						именно «Сибирь-Колесо»!
					</p>
				</div>
				<div className='grid w-[84%]  m-auto grid-cols-1 md:grid-cols-2 gap-12 mb-6'>
					<div className='p-3  cursor-pointer'>
						<h3 className='font-bold flex  items-center gap-8 mb-2'>
							<span className='text-4xl'>
								<GiCarWheel />
							</span>
							Шины и диски в Новосибирске
						</h3>
						<p className='pl-16 text-gray-500  text-sm'>
							Мы реализиуем как летние, так и зимние шины <br /> любых размеров
							и конфигураций на легковые, <br /> внедорожные и грузовые авто, а
							также колесные <br /> диски в широком ассортименте исключительно{' '}
							<br /> известных мировых брендов по приемлемым ценам.
						</p>
					</div>
					<div className='p-3  cursor-pointer'>
						<h3 className='font-bold flex items-center  gap-8  mb-2'>
							<span className='text-4xl'>
								<PiSealCheckLight />
							</span>
							Качество нашей продукции
						</h3>
						<p className='pl-16 text-gray-500 text-sm'>
							Продажа шин в Новосибирске производится с предоставлением
							сертификатов соответствия качества от производителей. Компания
							«Сибирь-Колесо» является официальным дистрибьютором и поставщиком
							более 30 мировых брендов, производящих шины и диски.
						</p>
					</div>
				</div>
				<div className=' grid m-auto w-[72%]'>
					<span className='mb-12 pl-3 mt-12'>
						<hr className='absolute  border  w-[6%] border-tt border-black' />
					</span>
					<h2 className='text-2xl pl-2 font-semibold mb-4'>
						Представляем лучших производителей мира
					</h2>
				</div>
				<div className='flex  justify-between mt-6'>
					<ImageSwiper />
				</div>
			</div>
		</>
	)
}

export default Benefits
