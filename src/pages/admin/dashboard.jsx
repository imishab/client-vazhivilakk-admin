import { useFetchAdminQuery } from "../../redux/api/adminApi";

export default function Dashboard() {
  const { data: admin, isLoading, error } = useFetchAdminQuery("");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching admin data.</p>;
  return (
    <>
      <div className="content-page">
        <div className="content">
          {/* Start Content*/}
          <div className="container-xxl">
            <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
              <div className="flex-grow-1">
                <h4 className="fs-18 fw-semibold m-0">
                  {admin?.name}! Dashboard
                </h4>
              </div>
            </div>
            {/* start row */}
            <div className="row">
              <div className="col-md-12 col-xl-12">
                <div className="row g-3">
                  <div className="col-md-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="fs-14 mb-1">Website Traffic</div>
                        </div>
                        <div className="d-flex align-items-baseline mb-2">
                          <div className="fs-22 mb-0 me-2 fw-semibold text-black">
                            91.6K
                          </div>
                          <div className="me-auto">
                            <span className="text-primary d-inline-flex align-items-center">
                              15%
                              <i
                                data-feather="trending-up"
                                className="ms-1"
                                style={{ height: 22, width: 22 }}
                              />
                            </span>
                          </div>
                        </div>
                        <div id="website-visitors" className="apex-charts" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="fs-14 mb-1">Conversion rate</div>
                        </div>
                        <div className="d-flex align-items-baseline mb-2">
                          <div className="fs-22 mb-0 me-2 fw-semibold text-black">
                            15%
                          </div>
                          <div className="me-auto">
                            <span className="text-danger d-inline-flex align-items-center">
                              10%
                              <i
                                data-feather="trending-down"
                                className="ms-1"
                                style={{ height: 22, width: 22 }}
                              />
                            </span>
                          </div>
                        </div>
                        <div id="conversion-visitors" className="apex-charts" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="fs-14 mb-1">Session duration</div>
                        </div>
                        <div className="d-flex align-items-baseline mb-2">
                          <div className="fs-22 mb-0 me-2 fw-semibold text-black">
                            90 Sec
                          </div>
                          <div className="me-auto">
                            <span className="text-success d-inline-flex align-items-center">
                              25%
                              <i
                                data-feather="trending-up"
                                className="ms-1"
                                style={{ height: 22, width: 22 }}
                              />
                            </span>
                          </div>
                        </div>
                        <div id="session-visitors" className="apex-charts" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="fs-14 mb-1">Active Users</div>
                        </div>
                        <div className="d-flex align-items-baseline mb-2">
                          <div className="fs-22 mb-0 me-2 fw-semibold text-black">
                            2,986
                          </div>
                          <div className="me-auto">
                            <span className="text-success d-inline-flex align-items-center">
                              4%
                              <i
                                data-feather="trending-up"
                                className="ms-1"
                                style={{ height: 22, width: 22 }}
                              />
                            </span>
                          </div>
                        </div>
                        <div id="active-users" className="apex-charts" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end sales */}
            </div>
            {/* end row */}
            {/* Start Monthly Sales */}

            {/* End Monthly Sales */}
            <div className="row">
              <div className="col-md-6 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex align-items-center">
                      <div className="border border-dark rounded-2 me-2 widget-icons-sections">
                        <i
                          data-feather="minus-square"
                          className="widgets-icons"
                        />
                      </div>
                      <h5 className="card-title mb-0">
                        Audiences By Time Of Day
                      </h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="audiences-daily" className="apex-charts mt-n3" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-6">
                <div className="card overflow-hidden">
                  <div className="card-header">
                    <div className="d-flex align-items-center">
                      <div className="border border-dark rounded-2 me-2 widget-icons-sections">
                        <i data-feather="table" className="widgets-icons" />
                      </div>
                      <h5 className="card-title mb-0">Most Visited Pages</h5>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-traffic mb-0">
                        <tbody></tbody>
                        <thead>
                          <tr>
                            <th>Page name</th>
                            <th>Visitors</th>
                            <th>Unique</th>
                            <th colSpan={2}>Bounce rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              /home
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>5,896</td>
                            <td>3,654</td>
                            <td>82.54%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-1"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /about.html
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>3,898</td>
                            <td>3,450</td>
                            <td>76.29%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-2"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /index.html
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>3,057</td>
                            <td>2,589</td>
                            <td>72.68%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-3"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /invoice.html
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>867</td>
                            <td>795</td>
                            <td>44.78%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-4"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /docs/
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>958</td>
                            <td>801</td>
                            <td>41.15%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-5"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /service.html
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>658</td>
                            <td>589</td>
                            <td>32.65%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-6"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              /analytical.html
                              <a
                                href="#"
                                className="ms-1"
                                aria-label="Open website"
                              >
                                <i
                                  data-feather="link"
                                  className="ms-1 text-primary"
                                  style={{ height: 15, width: 15 }}
                                />
                              </a>
                            </td>
                            <td>457</td>
                            <td>859</td>
                            <td>32.65%</td>
                            <td className="w-25">
                              <div
                                id="sparkline-bounce-7"
                                className="apex-charts"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* container-fluid */}
        </div>{" "}
        {/* content */}
        {/* Footer Start */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col fs-13 text-muted text-center">
                © - Made with <span className="mdi mdi-heart text-danger" /> by{" "}
                <a href="#!" className="text-reset fw-semibold">
                  Zoyothemes
                </a>
              </div>
            </div>
          </div>
        </footer>
        {/* end Footer */}
      </div>
    </>
  );
}
