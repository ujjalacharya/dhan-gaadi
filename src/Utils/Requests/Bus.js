import axios from 'axios';

export const getAvailableBusesOfOwner = () => axios.get('/bus/bus-available');
export const getUnavailableBusesOfOwner = () => axios.get('/bus/bus-unavailable');

export const addNewBus = body => axios.post('/bus', body);
