import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import "../../design/profile-design/Profile-design.scss";
import { Link } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import Navbar from "../../components/navbar/Navbar";
import Loading from "../../components/loading/Loading";

export default function Applications() {
  const [applications, setApplications] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchApplications();
  }, [page]);

  const fetchApplications = async () => {
    try {
      const res = await axiosClient.get(`/applications?page=${page}`);
      setApplications(res.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (page < applications.last_page) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="applications-card">
        <h1>Applications</h1>
        {applications ? (
          <div>
            {applications.length !== 0 ? (
              <div className="applications">
                {applications.data.map((item, i) => (
                  <ul key={i}>
                    <Link to={`/applicant/${item.id}`}>
                      <li>
                        <b>Applicant:</b> {item.email} <b>Position:</b>{" "}
                        {item.open_position.title}
                      </li>
                    </Link>
                  </ul>
                ))}
                {applications.last_page !== 1 ? (
                  <Pagination
                    handlePreviousPage={handlePreviousPage}
                    handleNextPage={handleNextPage}
                    isPreviousDisabled={page === 1}
                    isNextDisabled={page === applications.last_page}
                    page={page}
                    last_page={applications.last_page}
                  />
                ) : (
                  <div></div>
                )}
              </div>
            ) : (
              <div className="applications">
                <p>There are no new applications</p>
              </div>
            )}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
