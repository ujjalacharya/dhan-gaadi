import React from 'react';
import SideBar from './Sidebar';
import Header from './Header';

const Layout = ({ children, className = 'content-wrapper', title = 'Dashboard' }) => {
	return (
		<div>
			<Header />
			<SideBar />
			<div className={className}>
				<section className="content-header">
					<div className="row">
						<div className="col-md-12">
							<div className="box">
								<div className="box-header with-border">
									<h3 className="box-title">{title}</h3>
								</div>
								<div className="box-body">{children}</div>
                {/* <div className="box-footer">
                  <div className="row">
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
  
                        <h5 className="description-header">&copy; 2020 Dhan-gaadi</h5>
                      </div>
                    </div>
                  </div>
                </div> */}
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Layout;
