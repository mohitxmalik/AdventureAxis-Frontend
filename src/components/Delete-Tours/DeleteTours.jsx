import React, { useState, useEffect, useContext } from 'react'
import CommonSection from '../../shared/CommonSection'
import '../../styles/tour.css'
import TourCard from '../../shared/TourCard'
import SearchBar from '../../shared/SearchBar'
import Newsletter from '../../shared/Newsletter'
import { Col, Row, Container } from 'reactstrap'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
import { AuthContext } from '../../Context/AuthContext'

const DeleteTours = () => {
  const user = useContext(AuthContext).user;
  window.scrollTo(0, 0);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const deleteBtn = true;

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: toursCount } = useFetch(`${BASE_URL}/tours/search/getToursCount`);

  useEffect(() => {
    const pages = Math.ceil(toursCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 300);
  }, [page, toursCount, tours]);

  return (
    <>
      {
        user?.role === 'admin'
          ?
          <>
            <CommonSection title={"All Tours"} />
            <section>
              <Container>
                <Row>
                  <SearchBar />
                </Row>
              </Container>
            </section>
            <section className="pt-0">
              <Container>
                {
                  loading && <h4 className='text-center pt-5'>Loading....</h4>
                }

                {
                  error && <h4 className='text-center pt-5'>{error}</h4>
                }

                {
                  !loading && !error && <Row>
                    {tours?.map(tour => (
                      <Col lg='3' className="mb-4" key={tour._id}>
                        <TourCard tour={tour} deleteBtn={deleteBtn} />
                      </Col>
                    ))}

                    <Col lg='12'>
                      <div className="pagination d-flex align-items-center
               justify-content-center mt-4 gap-3">
                        {[...Array(pageCount).keys()].map(number => (
                          <span
                            key={number}
                            onClick={() => setPage(number)}
                            className={page === number ? 'active__page' : ""}
                          >
                            {number + 1}
                          </span>
                        ))}
                      </div>
                    </Col>
                  </Row>
                }
              </Container>
            </section>
            <Newsletter />
          </>
          :
          <h4 className="text-center mt-5">You are Not Authorized</h4>
      }
    </>
  );
}

export default DeleteTours
