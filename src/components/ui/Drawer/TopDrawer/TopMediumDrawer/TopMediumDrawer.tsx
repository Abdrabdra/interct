import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Icon, Stack, Typography } from '@mui/material'

import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import mdLogo from '@assets/images/logo/md-logo-auto-like.png'

import MediumNavigation from './MediumNavigation'

const TopMediumDrawer = () => {
	return (
		<Stack direction='row' justifyContent={'space-between'} alignItems={'center'} spacing={2} sx={{ flex: '1' }}>
			<Box
				component='img'
				sx={{
					width: 180,
					height: 25
				}}
				alt='Logo'
				src={mdLogo}
			/>
			<MediumNavigation />
			<NavLink
				to={'profile'}
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
						<Icon component={PersonRoundedIcon} />
						<Typography sx={{ fontSize: '20px', lineHeight: '23.44px' }}>Профиль</Typography>
					</Stack>
				)}
			</NavLink>
		</Stack>
	)
}

export default TopMediumDrawer