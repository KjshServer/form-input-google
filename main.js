const email_input = document.querySelector("#email-input-1")
const email_label = document.querySelector("#email-label-1")
const email_error = document.querySelector("#email-error-1")
const password_input = document.querySelector("#password-input-1")
const password_label = document.querySelector("#password-label-1")
const password_error = document.querySelector("#password-error-1")

const validateEmail = () => {
	const email_input_value = email_input.value
	const email_expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

	email_error.innerHTML = ""
	email_input.style.border = "1px solid green"
	email_input.style.color = "green"
	email_label.style.color = "green"

	if (email_input_value === "") {
		email_error.innerHTML = "Email empty"
		email_input.style.border = "1px solid red"
		email_input.style.color = "red"
		email_label.style.color = "red"
	} else if (email_input_value.length < 6) {
		email_error.innerHTML = "Email min 6 characters"
		email_input.style.border = "1px solid red"
		email_input.style.color = "red"
		email_label.style.color = "red"
	} else if (email_input_value.length > 250) {
		email_error.innerHTML = "Email max 250 characters"
		email_input.style.border = "1px solid red"
		email_input.style.color = "red"
		email_label.style.color = "red"
	} else if (!email_expr.test(email_input_value)) {
		email_error.innerHTML = "Email invalid"
		email_input.style.border = "1px solid red"
		email_input.style.color = "red"
		email_label.style.color = "red"
	}
}

const validatePassword = () => {
	const password_input_value = password_input.value
	const password_expr = /[A-Za-z0-9*-_@]$/

	password_error.innerHTML = ""
	password_input.style.border = "1px solid green"
	password_input.style.color = "green"
	password_label.style.color = "green"

	if (password_input_value === "") {
		password_error.innerHTML = "Password empty"
		password_input.style.border = "1px solid red"
		password_input.style.color = "red"
		password_label.style.color = "red"
	} else if (password_input_value.length < 8) {
		password_error.innerHTML = "Password min 6 characters"
		password_input.style.border = "1px solid red"
		password_input.style.color = "red"
		password_label.style.color = "red"
	} else if (password_input_value.length > 25) {
		password_error.innerHTML = "Password max 25 characters"
		password_input.style.border = "1px solid red"
		password_input.style.color = "red"
		password_label.style.color = "red"
	} else if (!password_expr.test(password_input_value)) {
		password_error.innerHTML = "Password invalid"
		password_input.style.border = "1px solid red"
		password_input.style.color = "red"
		password_label.style.color = "red"
	}
}

email_input.addEventListener("focus", () => {
	validateEmail()
})

email_input.addEventListener("keyup", () => {
	validateEmail()
})

password_input.addEventListener("focus", () => {
	validatePassword()
})

password_input.addEventListener("keyup", () => {
	validatePassword()
})
