import { Formik } from "formik"
import { FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material"

import { MainButton } from "@components/ui/Button"
import { StyledMainInput } from "@components/ui/Input"
import { MenuProps, MONTHS } from "./EditForm.const"

const EditForm = () => {
	return (
		<Formik
			initialValues={{ name: "", phone: "", day: "", month: "", year: "" }}
			onSubmit={(values) => {
				// body && create({ ...body, ...values })
			}}
		>
			{({ handleSubmit, handleChange, errors, values }) => (
				<form onSubmit={handleSubmit}>
					<Stack spacing={1.5}>
						<Stack>
							<InputLabel
								shrink
								htmlFor="name"
								sx={{
									fontWeight: 600,
									fontSize: "20px",
									color: "secondary.300"
								}}
							>
								Имя
							</InputLabel>
							<StyledMainInput
								id="name"
								type="text"
								name="name"
								value={values.name}
								onChange={handleChange}
							/>
						</Stack>
						<Stack>
							<InputLabel
								shrink
								htmlFor="phone"
								sx={{
									fontWeight: 600,
									fontSize: "20px",
									color: "secondary.300"
								}}
							>
								Номер телефона
							</InputLabel>
							<StyledMainInput
								id="phone"
								type="text"
								name="phone"
								value={values.phone}
								onChange={handleChange}
							/>
						</Stack>

						<Stack>
							<InputLabel
								shrink
								htmlFor="select-day"
								sx={{
									fontWeight: 600,
									fontSize: "20px",
									color: "secondary.300"
								}}
							>
								Дата рождения
							</InputLabel>

							<Stack direction="row" spacing={1.5}>
								<StyledMainInput
									id="input"
									type="text"
									name="day"
									value={values.day}
									onChange={handleChange}
								/>

								<FormControl fullWidth>
									<InputLabel id="select-month">Месяц</InputLabel>
									<Select
										id="select-month"
										value={values.month}
										name="month"
										label="Месяц"
										onChange={handleChange}
										MenuProps={MenuProps}
										sx={{
											"&:hover": {
												"& .MuiOutlinedInput-notchedOutline": {
													borderColor: "primary.main"
												}
											},

											".MuiInputBase-input": {
												backgroundColor: "common.white"
											},

											".MuiOutlinedInput-notchedOutline": {
												borderColor: "transparent"
											},

											".MuiSvgIcon-root": {
												color: "primary.main"
											}
										}}
									>
										{MONTHS.map((month) => (
											<MenuItem value={month} key={month}>
												{month}
											</MenuItem>
										))}
									</Select>
								</FormControl>

								<FormControl fullWidth>
									<InputLabel id="select-year">Год</InputLabel>
									<Select
										id="select-year"
										value={values.year}
										name="year"
										label="Год"
										onChange={handleChange}
										MenuProps={MenuProps}
										sx={{
											"&:hover": {
												"& .MuiOutlinedInput-notchedOutline": {
													borderColor: "primary.main"
												}
											},

											".MuiInputBase-input": {
												backgroundColor: "common.white"
											},

											".MuiOutlinedInput-notchedOutline": {
												borderColor: "transparent"
											},

											".MuiSvgIcon-root": {
												color: "primary.main"
											}
										}}
									>
										{MONTHS.map((month) => (
											<MenuItem value={month} key={month}>
												{month}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Stack>
						</Stack>

						<MainButton type="submit" bgcolor="primary.main" fsize="18px">
							Отправить
						</MainButton>
					</Stack>
				</form>
			)}
		</Formik>
	)
}

export default EditForm
