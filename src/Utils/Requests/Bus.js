import axios from 'axios';

export const getAvailableBusesOfOwner = () => axios.get('/bus/owner-bus-available');
export const getUnavailableBusesOfOwner = () => axios.get('/bus/owner-bus-unavailable');

export const addNewBus = body => axios.post('/bus', body);

export const getBusBySlug = slug => axios.get('/bus/' + slug);

export const removeBus = slug => axios.delete('/bus/' + slug);

export const updateBus = (slug, body) => axios.put('/bus/' + slug, body);

// axios.post('/bus', body, { onUploadProgress: progressEvent => console.log(progressEvent.loaded) });
