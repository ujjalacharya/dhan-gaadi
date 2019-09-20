import axios from "axios";

export const getOwnerBookings = () => axios.get("/bookings");

export const changeVerificationStatus = (bookingId, status) =>
    axios.patch(`/bookings/${bookingId}`, {verification: status});
