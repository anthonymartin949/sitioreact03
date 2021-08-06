import React from 'react'

const Aside = () => {
    return(
        <div classname=" my-1">
        <h1 className="border-top my-1"></h1>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
                <h1 className="border-top my-1"></h1>
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
                    <h1 className="border-top my-1"></h1>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label for="recipient-name" class="col-form-label">Recipient:</label>
                                                <input type="text" className="form-control" id="recipient-name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="message-text" className="col-form-label">Message:</label>
                                                <textarea className="form-control" id="message-text"></textarea>
                                        </div>
                                    </form>
                                </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Send message</button>
                            </div>
                            </div>
                        </div>
                    </div>    
                    <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
                        <h1 className="border-top my-1"></h1>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="list-unstyled ps-0">
						            <li className="mb-1">
							            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
							                Home
							            </button>
							            <div className="collapse show" id="home-collapse">
										<iframe width="560" height="315" src="https://www.youtube.com/embed/JhaWhK1PuiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								                <li><a href="#" className="link-dark rounded">Overview</a></li>
								                <li><a href="#" className="link-dark rounded">Updates</a></li>
								                <li><a href="#" className="link-dark rounded">Reports</a></li>
							                </ul>
							            </div>
						            </li>
						            <li class="mb-1">
							            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
							                Dashboard
							            </button>
							            <div className="collapse" id="dashboard-collapse">
							                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								                <li><a href="#" className="link-dark rounded">Overview</a></li>
								                <li><a href="#" className="link-dark rounded">Weekly</a></li>
								                <li><a href="#" className="link-dark rounded">Monthly</a></li>
								                <li><a href="#" className="link-dark rounded">Annually</a></li>
							                </ul>
							            </div>
						            </li>
						            <li className="mb-1">
							            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
							                Orders
							            </button>
							            <div className="collapse" id="orders-collapse">
							                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								                <li><a href="#" className="link-dark rounded">New</a></li>
								                <li><a href="#" className="link-dark rounded">Processed</a></li>
								                <li><a href="#" className="link-dark rounded">Shipped</a></li>
								                <li><a href="#" className="link-dark rounded">Returned</a></li>
							                </ul>
							            </div>
						            </li>
						            <li className="border-top my-3"></li>
						            <li className="mb-1">
							            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
							                Account
							            </button>
							            <div className="collapse" id="account-collapse">
							                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								                <li><a href="#" className="link-dark rounded">New...</a></li>
								                <li><a href="#" className="link-dark rounded">Profile</a></li>
								                <li><a href="#" className="link-dark rounded">Settings</a></li>
								                <li><a href="#" className="link-dark rounded">Sign out</a></li>
							                </ul>
							            </div>
						            </li>
						        </ul>
                            </div>
                        </div>
                        </div>
    )
}
export default Aside