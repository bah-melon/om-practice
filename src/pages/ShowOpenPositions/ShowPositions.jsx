import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import '../../design/profile-design/Profile-design.scss';
import axiosClient from "../../api/axiosClient";
import Loading from "../../components/loading/Loading";

export default function ShowPositions() {
    const [positions, setPositions] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPositions();
  }, [page])

  const fetchPositions = async () => {
    try {
        const res = await axiosClient.get(`/open-positions?page=${page}`);
        setPositions(res.data);
    } catch (error) {
        console.error("Error fetching positions:", error);
    }
}

const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (page < positions.last_page) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="show-position">
        <h1>Open Positions</h1>
        {positions ? (
          <div className="position">
            {positions.data.map((item, i) => (
              <ul key={i}>
                <Link to={`/position/${item.id}`}>
                  <li>
                    <b>Title:</b> {item.title}
                  </li>
                  <li>
                    <b>Location:</b> {item.location}
                  </li>
                  <li>
                    <b>Job type:</b> {item.employment_type}
                  </li>
                </Link>
              </ul>
            ))}
            {positions.last_page !== 1 ? (
              <Pagination
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                isPreviousDisabled={page === 1}
                isNextDisabled={page === positions.last_page}
                page={page}
                last_page={positions.last_page}
              />
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
