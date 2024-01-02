import { check, ValidationChain } from 'express-validator';
import { NoSQL } from './index';

export const GetTerm: ValidationChain[] = [
	check('terminal')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('afiliado es requerido')
		.isLength({ min: 8, max: 8 })
		.withMessage('Error revisar afiliado, deben ser 9 caracteres')
		.custom(NoSQL),
	//
];
export const GetParams: ValidationChain[] = [
	check('key_agregador')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('key_agregador es requerido')
		.isNumeric()
		.custom(NoSQL),
	//
];

export const GetAfi: ValidationChain[] = [
	check('afiliado')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('afiliado es requerido')
		.isLength({ min: 9, max: 9 })
		.withMessage('Error revisar afiliado, deben ser 9 caracteres')
		.isAlphanumeric()
		.custom(NoSQL),
	//
];

export const RegisterTerm: ValidationChain[] = [
	check('afiliado')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('afiliado es requerido')
		.isLength({ min: 9, max: 9 })
		.withMessage('Error revisar afiliado, deben ser 9 caracteres')
		.isAlphanumeric()
		.custom(NoSQL),
	//
	check('cantidad')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('cantidad es requerido')
		.isNumeric()
		.withMessage('Error solo numeros')
		.isLength({ min: 1, max: 3 })
		.withMessage('numero no valido')
		.custom(NoSQL),
	//
	check('prefijo')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('prefijo es requerido')
		.isAlphanumeric()
		.withMessage('Error revisar prefijo')
		.isLength({ min: 2, max: 2 })
		.withMessage('Error el tamano del prefijo es invalido')
		.custom(NoSQL),
	//
	check('id_type_pos')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('id_type_pos es requerido')
		.isNumeric()
		.withMessage('Error revisar id_type_pos')
		.custom(NoSQL),
];

export const ActDesTerm: ValidationChain[] = [
	check('terminal')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('terminal es requerido')
		.isLength({ min: 8, max: 8 })
		.withMessage('Error revisar terminal, deben ser 8 caracteres')
		.isAlphanumeric()
		.custom(NoSQL),
	//
	check('estado')
		.exists({ checkNull: true })
		.withMessage('estado es requerido')
		.isNumeric()
		.withMessage('Error revisar estado')
		.isLength({ min: 1, max: 1 })
		.withMessage('Error el tamano del estado es invalido')
		.custom(NoSQL),
	//
	check('responsable')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('responsable es requerido')
		.isLength({ min: 3, max: 20 })
		.withMessage('Error el tamano del responsable es invalido')
		.custom(NoSQL),
];

export const RegisterParamTerm: ValidationChain[] = [
	check('value')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('prefijo es requerido')
		.isLength({ min: 2, max: 2 })
		.withMessage('Error revisar prefijo, deben ser 2 caracteres')
		.isAlphanumeric()
		.custom(NoSQL),
	//
	check('org')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('org es requerido')
		.isNumeric()
		.withMessage('Error solo numeros')
		.isLength({ min: 3, max: 3 })
		.withMessage('Error revisar Org, deben ser 3 caracteres')
		.custom(NoSQL),
	//
	check('participant')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('participant es requerido')
		.isNumeric()
		.withMessage('Error revisar participant')
		.isLength({ min: 1 })
		.withMessage('Error revisar participant, deben ser nim 1 caracteres')
		.isLength({ max: 2 })
		.withMessage('Error revisar participant, deben ser max 2 caracteres')
		.custom(NoSQL),
	//
	check('parent').exists({ checkFalsy: true, checkNull: true }).withMessage('parent es requerido').custom(NoSQL),
	check('act_create')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('act_create es requerido')
		.custom(NoSQL),
	check('key_agregador')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage('key_agregador agregador es requerido')
		.custom(NoSQL),
];

export const LoginData: ValidationChain[] = [
	check('email', 'el correo no es valido').exists({ checkFalsy: true, checkNull: true }).isEmail().custom(NoSQL),

	check('password', 'la contraseña debe tener 1 numero, 1 mayuscula, 1 simbolo y un minimo de 6 caracteres')
		.exists({ checkFalsy: true, checkNull: false })
		.isStrongPassword({ minLength: 6, minNumbers: 1, minUppercase: 1, minSymbols: 1 })
		.custom(NoSQL),
	//
];

export const prueba: ValidationChain[] = [];
