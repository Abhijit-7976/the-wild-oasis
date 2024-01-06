import { useState } from "react";
import Button from "../ui/Button";
import {
  createBookings,
  createCabins,
  createGuests,
  deleteBookings,
  deleteCabins,
  deleteGuests,
} from "./apiUploader";

export function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // Bookings need to be deleted FIRST
    await deleteBookings();
    await deleteGuests();
    await deleteCabins();

    // Bookings need to be created LAST
    await createGuests();
    await createCabins();
    await createBookings();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
      }}>
      <h3>DEV AREA</h3>

      <Button
        onClick={uploadAll}
        // To prevent accidental clicks. Remove to run once!
        disabled={isLoading}
        // disabled={true}
      >
        Upload ALL sample data
      </Button>
      {/* <p>Only run this only once!</p>
      <p>
        <em>(Cabin images need to be uploaded manually)</em>
      </p> */}
      <hr />
      <Button
        onClick={uploadBookings}
        disabled={isLoading}>
        Upload CURRENT bookings
      </Button>
      {/* <p>You can run this every day you develop the app</p> */}
    </div>
  );
}
