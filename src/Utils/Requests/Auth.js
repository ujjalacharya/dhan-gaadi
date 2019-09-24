import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthToken from '../setAuthToken';

import { JWT_SECRET, jwtKey } from '../config';
import { removeItemFromLocalStorage, getItemFromLocalStorage, setItemToLocalStorage } from './LocalStorage';

export const signUp = user => axios.post('/auth-owner/signup', user);

export const signIn = user => axios.post('/auth-owner/signin', user);

export const refreshToken = id => axios.post('/auth-owner/refreshToken', {_id: id});

export const authenticate = (data, next) => {
	if (typeof window !== 'undefined') {
		setItemToLocalStorage(jwtKey, JSON.stringify(data.data));
		setAuthToken(isAuthenticated().token);
		next();
	}
};

export const isAuthenticated = () => {
	if (typeof window == 'undefined') {
		return false;
	}

	let jsontoken = getItemFromLocalStorage(jwtKey);

	let data;

	if (jsontoken) {
		let { token } = JSON.parse(jsontoken);
		jwt.verify(token, JWT_SECRET, async (err, decoded) => {
			if (err) {
				data = false;
				signout();
			} else {
				let parsedtoken = JSON.parse(jsontoken);
				data = { ...parsedtoken, user: { ...decoded } };
			}
		});
		return data;
	} else {
		return false;
	}
};

export const signout = () => {
	if (typeof window !== 'undefined') {
		removeItemFromLocalStorage(jwtKey);
		return true;
	}
};
