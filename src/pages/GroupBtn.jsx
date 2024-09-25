import { useState } from 'react'
import { AiOutlineSun } from 'react-icons/ai'
import { GiStitchedWound } from 'react-icons/gi'
import { TbSnowflake } from 'react-icons/tb'

const GroupBtn = () => {
	const [activeButton, setActiveButton] = useState(2)
	const [showThirdButton, setShowThirdButton] = useState(true)

	const handleButtonClick = buttonIndex => {
		setActiveButton(buttonIndex)

		if (buttonIndex === 2) {
			setShowThirdButton(true)
		} else if (buttonIndex !== 3) {
			setShowThirdButton(false)
		}
	}

	return (
		<div className='flex flex-wrap gap-4 mb-4 justify-center md:justify-start'>
			<button
				className={`flex gap-x-2 items-center py-2 px-4 rounded transition-colors duration-300 ${
					activeButton === 1 ? 'text-white ' : 'text-gray-500'
				} `}
				onClick={() => handleButtonClick(1)}
			>
				<AiOutlineSun />
				<h3 className='text-sm md:text-base'>Летние шины</h3>
			</button>

			<button
				className={`flex gap-x-2 items-center py-2 px-4 rounded transition-colors duration-300 ${
					activeButton === 2 ? 'text-white ' : 'text-gray-500'
				} `}
				onClick={() => handleButtonClick(2)}
			>
				<TbSnowflake />
				<h3 className='text-sm md:text-base'>Зимние шины</h3>
			</button>

			{showThirdButton && (
				<button
					className={`flex gap-x-2 items-center py-2 px-4 rounded transition-colors duration-300 ${
						activeButton === 3 ? 'text-white ' : 'text-gray-500'
					} `}
					onClick={() => handleButtonClick(3)}
				>
					<GiStitchedWound />
					<h3 className='text-sm md:text-base'>Шипованные</h3>
				</button>
			)}
		</div>
	)
}

export default GroupBtn
