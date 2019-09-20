import axios from "axios";

export const getOwnerBookings = () => axios.get("/bookings");

export const removeBooking = id => axios.delete(`/bookings/${id}`);

export const changeVerificationStatus = (bookingId, status) =>
    axios.patch(`/bookings/${bookingId}`, {verification: status});
