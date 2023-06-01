import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, Stack, Typography, useMediaQuery } from '@mui/material'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded'
import AddCircleIcon from '@mui/icons-material/AddCircle'


const links = [
	{ id: 1, route: 'home', icon: HomeRoundedIcon, text: 'Главная' },
	{ id: 2, route: 'like', icon: FavoriteIcon, text: 'Лайки' },
	{ id: 3, route: 'chat', icon: ChatBubbleRoundedIcon, text: 'Сообщения' }
]

const MediumNavigation = () => {
	const is1300 = useMediaQuery('(min-width:1300px)')

	return (
		<Stack direction={'row'} spacing={5}>
			{links.map((link) => (
				<NavLink
					to={link.route}
					key={link.id}
					style={{ textDecoration: 'none', backgroundColor: 'none' }}
				>
					{({ isActive }) => (
						<Stack
							direction={'row'}
							alignItems={'center'}
							spacing={2.5}
							sx={{
								height: '60px',
								borderRadius: '5px',
								boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
								padding: '15px 20px 15px 20px',
								backgroundColor: isActive ? 'secondary.300' : 'secondary.100',
								color: isActive ? 'common.white' : 'grey.800',
								transition: '0.3s ease-in-out',

								'&:hover': {
									backgroundColor: 'secondary.300'
								}
							}}>
							<Icon component={link.icon} />
							<Typography sx={{ fontSize: '20px', lineHeight: '23.44px' }}>{link.text}</Typography>
						</Stack>
					)}
				</NavLink>
			))}
			<NavLink
				to={'post'}
				style={{ textDecoration: 'none', backgroundColor: 'none' }}
			>
				{({ isActive }) => (
					<Stack
						direction={'row'}
						alignItems={'center'}
						spacing={2.5}
						sx={{
							height: '60px',
							borderRadius: '50px',
							padding: '15px 20px',
							backgroundColor: isActive ? 'common.black' : 'common.white',
							color: isActive ? 'common.white' : 'common.black',
							transition: '0.3s ease-in-out',

							'&:hover': {
								backgroundColor: 'common.black',
								color: 'common.white'
							}
						}}>
						<Icon component={AddCircleIcon} />
						{is1300 && <Typography sx={{ fontSize: '20px', lineHeight: '23.44px' }}>Создать объявление</Typography>}
					</Stack>
				)}
			</NavLink>


		</Stack>
	)
}

export default MediumNavigation