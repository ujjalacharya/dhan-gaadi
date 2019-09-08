import axios from 'axios';

export const getAvailableBusesOfOwner = () => axios.get('/bus/bus-available');