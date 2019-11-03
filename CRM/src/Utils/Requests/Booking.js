import axios from 'axios';

export const getOwnerBookings = () => axios.get('/bookings/my');
export const getAllBookings = () => axios.get('/bookings/all');

export const removeBooking = id => axios.delete(`/bookings/${id}`);

export const changeVerificationStatus = (bookingId, status) =>
	axios.patch(`/bookings/${bookingId}`, { verification: status });

export const postSoldSeat = (slug, seat) => axios.post(`/bookings/sold/${slug}`, { seatNumber: seat });
