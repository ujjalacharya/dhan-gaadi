import axios from 'axios';

export const getAvailableBusesOfOwner = () => axios.get('/bus/owner-bus-available');
export const getUnavailableBusesOfOwner = () => axios.get('/bus/owner-bus-unavailable');

export const addNewBus = body => axios.post('/bus', body);
