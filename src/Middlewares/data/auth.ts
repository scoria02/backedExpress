import { check, ValidationChain } from 'express-validator';
import { NoSQL } from './index';

export const RegisterData: ValidationChain[] = [
	check('name')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('name es requerido')
		.isLength({ min: 3, max: 75 })
		.withMessage('Error revisar la cantidad de caracteres, min 3 max 75')
		.custom(NoSQL),
	//
	check('email')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('email es requerido')
		.isEmail()
		.withMessage('email no valido')
		.custom(NoSQL),
	//
	check('userWebTipoIdentificacion')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('userWebTipoIdentificacion es requerido')
		.isAlpha()
		.isLength({ min: 1, max: 1 })
		.withMessage('Error caracteres validos V, J, G...')
		.custom(NoSQL),
	//
	check('password')
		.exists({ checkFalsy: true, checkNull: false })
		.withMessage('password es requerido')
		.isStrongPassword({ minLength: 6, minNumbers: 1, minUppercase: 1, minSymbols: 1 })
		.withMessage('Error la contraseña debe tener 1 numero, 1 mayuscula, 1 simbolo y un minimo de 6 caracteres')
		.custom(NoSQL),
	//
	check('userWebIdentificacion')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('userWebIdentificacion es requerido')
		.isLength({ min: 6, max: 8 })
		.withMessage('Error revisar la cantidad de caracteres, min 6 max 8')
		.isNumeric({ no_symbols: true })
		.withMessage('Error solo numeros')
		.custom(NoSQL),
];

export const LoginData: ValidationChain[] = [
	//
	check('email')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('email es requerido')
		.isEmail()
		.withMessage('email no valido')
		.custom(NoSQL),
	//
	check('password')
		.exists({ checkFalsy: true, checkNull: false })
		.withMessage('password es requerido')
		.isStrongPassword({ minLength: 6, minNumbers: 1, minUppercase: 1, minSymbols: 1 })
		.withMessage('Error la contraseña debe tener 1 numero, 1 mayuscula, 1 simbolo y un minimo de 6 caracteres')
		.custom(NoSQL),
	//
];

export const EnvioCorreo: ValidationChain[] = [
	//
	check('email', 'el correo no es valido').exists({ checkFalsy: true, checkNull: true }).isEmail().custom(NoSQL),
	//
	check('userWebTipoIdentificacion', 'Tipo de identidad')
		.exists({ checkFalsy: true, checkNull: true })
		.isString()
		.custom(NoSQL),
	//
	check('userWebIdentificacion', 'el numero de documento de identidad no es valido')
		.exists({ checkFalsy: true, checkNull: true })
		.isLength({ min: 6, max: 20 })
		.isNumeric({ no_symbols: true })
		.custom(NoSQL),
];

export const NewPass: ValidationChain[] = [
	//
	check('password')
		.exists({ checkFalsy: true, checkNull: false })
		.withMessage('password es requerido')
		.isStrongPassword({ minLength: 6, minNumbers: 1, minUppercase: 1, minSymbols: 1 })
		.withMessage('Error la contraseña debe tener 1 numero, 1 mayuscula, 1 simbolo y un minimo de 6 caracteres')
		.custom(NoSQL),
	//
];
