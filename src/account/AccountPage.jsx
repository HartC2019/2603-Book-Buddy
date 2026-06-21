import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { getMe } from "../api/auth";
import { returnBook } from "../api/books";
import "./account.css";

export default function AccountPage() {
  const { token } = useAuth();
  const [user, setUser] = useState(null);

  const syncUser = async () => {
    const data = await getMe(token);

    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    if (token) {
      syncUser();
    }
  }, [token]);

  if (!token) {
    return <p>Please log in.</p>;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  const returnReservation = async (reservationId) => {
    try {
      await returnBook(token, reservationId);

      syncUser();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="account-page">
      <h1 className="account-header">Account</h1>

      <div className="account-info">
        <p className="account-name">
          {user.firstname} {user.lastname}
        </p>

        <p className="account-email">{user.email}</p>
      </div>

      <section className="reservations-section">
        <h2 className="reservations-header">My Reservations</h2>

        {user.reservations.length === 0 ? (
          <p className="empty-reservations">No reservations yet.</p>
        ) : (
          <ul className="reservation-list">
            {user.reservations.map((reservation) => (
              <li key={reservation.id} className="reservation-card">
                <img
                  src={reservation.coverimage}
                  alt={reservation.title}
                  className="reservation-cover"
                />

                <div className="reservation-info">
                  <h3>{reservation.title}</h3>

                  <p>{reservation.author}</p>

                  <button
                    className="return-button"
                    onClick={() => returnReservation(reservation.id)}
                  >
                    Return Book
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}
