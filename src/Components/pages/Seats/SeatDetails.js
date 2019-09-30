import React, { Component } from "react";
import { postSoldSeat } from "../../../Utils/Requests/Booking";
import Swal from "sweetalert2";

class SeatDetails extends Component {
  state = {
    size: "small",
    arr: [0, 4, 8, 12, 16, 20, 24],
    oddA: ["A1", "A3", "A5", "A7", "A9", "A11", "A13", "A15"],
    evenA: ["A2", "A4", "A6", "A8", "A10", "A12", "A14"],
    oddB: ["B1", "B3", "B5", "B7", "B9", "B11", "B13", "B15"],
    evenB: ["B2", "B4", "B6", "B8", "B10", "B12", "B14"]
  };

  handleClick = async seat => {
    Swal.fire({
      title: "Are you sure?",
      text: "Seats sold !",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!"
    }).then(async result => {
      if (result.value) {
        this.props.setSold([...this.props.sold, seat]);
        await postSoldSeat(this.props.slug, seat);
      }
    });
  };

  render() {
    const { size, arr, oddA, oddB, evenA, evenB } = this.state;
    const { sold, booked } = this.props;
    return (
      <div style={styles.wrapper}>
        <div className="steer" style={styles.steer}>
          <img style={styles.img} src="/img/steer.png" />
        </div>
        <div style={styles.busDiv}>
          {arr.map((le, i) => {
            return (
              <div key={i}>
                <button
                  className="btn btn-sm btn-primary"
                  size={size}
                  disabled={
                    sold.includes(oddA[i])
                      ? true
                      : booked.includes(oddA[i])
                      ? true
                      : false
                  }
                  style={
                    sold.includes(oddA[i])
                      ? styles.soldButton
                      : booked.includes(oddA[i])
                      ? styles.bookedButton
                      : styles.button
                  }
                  onClick={() => this.handleClick(oddA[i])}
                >
                  {oddA[i]}
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  size={size}
                  disabled={
                    sold.includes(evenA[i])
                      ? true
                      : booked.includes(evenA[i])
                      ? true
                      : false
                  }
                  style={
                    sold.includes(evenA[i])
                      ? styles.soldButton
                      : booked.includes(evenA[i])
                      ? styles.bookedButton
                      : styles.button
                  }
                  onClick={() => this.handleClick(evenA[i])}
                >
                  {evenA[i]}
                </button>
              </div>
            );
          })}
          {arr.map((le, i) => (
            <div
              key={i}
              style={{ ...styles.secondCol, ...{ top: `${le}rem` } }}
            >
              <button
                className="btn btn-sm btn-primary"
                disabled={
                  sold.includes(oddB[i])
                    ? true
                    : booked.includes(oddB[i])
                    ? true
                    : false
                }
                size={size}
                style={
                  sold.includes(oddB[i])
                    ? styles.soldButton
                    : booked.includes(oddB[i])
                    ? styles.bookedButton
                    : styles.button
                }
                onClick={() => this.handleClick(oddB[i])}
              >
                {oddB[i]}
              </button>
              <button
                className="btn btn-sm btn-primary"
                disabled={
                  sold.includes(evenB[i])
                    ? true
                    : booked.includes(evenB[i])
                    ? true
                    : false
                }
                size={size}
                style={
                  sold.includes(evenB[i])
                    ? styles.soldButton
                    : booked.includes(evenB[i])
                    ? styles.bookedButton
                    : styles.button
                }
                onClick={() => this.handleClick(evenB[i])}
              >
                {evenB[i]}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: "60vh",
    display: "flex",
    position: "relative",
    top: "6rem",
    left: "29%"
  },
  steer: {
    margin: "4rem"
  },
  img: {
    height: "3rem",
    transform: "rotate(90deg)"
  },
  busDiv: {
    background: "#434343",
    height: "29rem",
    position: "relative",
    width: "23rem",
    color: "#ffff",
    transform: "rotate(270deg)"
  },
  secondCol: {
    position: "absolute",
    top: 0,
    right: 0
  },
  soldButton: {
    background: "#ff4d4f",
    color: "#ffff",
    margin: ".5rem"
  },
  bookedButton: {
    background: "#434343",
    color: "#ffff",
    margin: ".5rem"
  },
  button: {
    margin: ".5rem"
  }
};

export default SeatDetails;
