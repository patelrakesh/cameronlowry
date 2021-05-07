import React, { Fragment, useEffect, useState } from "react";
// import { Button, Col, Row } from "reactstrap";
import MapIcon from "../../images/map_icon.png";

function UnitInformationPage(props) {
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [property, setProperty] = useState({});
  const [units, setUnits] = useState([]);
  const [unitsGalleryImages, setUnitsGalleryImages] = useState([]);

  useEffect(() => {
    function fetchData() {
      console.log("datas::", props.data);
      setData(props.data);
      setImages(props.data.images);
      setProperty(props.data.property);
      setUnits(props.data.units);
      setUnitsGalleryImages(props.data.unitsGalleryImages);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="container">
          <div className="sub-contain">
            <div className="about">
            <div className="about_imgs">
              <img
                src="https://via.placeholder.com/1000x350?text=2"
                width="30%"
                height="200px"
              />
              <img
                src="https://via.placeholder.com/1000x350?text=3"
                width="40%"
                height="200px"
              />
              <img
                src="https://via.placeholder.com/1000x350?text=4"
                width="30%"
                height="200px"
              />
            </div>
            <div className="about_details">
              <h1>
                <span className="highlight">Unit</span> Information
              </h1>
              <div className="address">
                <img src={MapIcon} height="50px" />
                <div className="txt">
                  {property.hasName && (
                    <p className="highlight property_name">{property.name}</p>
                  )}
                  {property.hasStreetAddress && (
                    <p className="property_address">{property.streetAddress}</p>
                  )}
                </div>
              </div>
              <div className="about_btn">
                <a href="www.gmaven.com">
                  <span>+</span> View additional Units
                </a>
                <span className="count">-5</span>
              </div>
            </div>
          </div>
            <div className="detail">
            <div className="sub_detail">
            
              {units.map((item, index) => {
                if (item.spaceBreakdown !== null) {
                  return (
                    <Fragment>
                      <div
                        className="spaceBreakdown"
                        style={{ width: `${100 / 2}%` }}
                      >
                        <div className="title">
                          <div class="cut-corner filled">
                            <a href="#" className="button3 highlight">
                              Unit {item.name}
                            </a>
                          </div>
                          <div class="cut-corner filled">
                            <a href="www.gmaven.com" className="more button3 highlight">
                            <span>+</span> more
                            </a>
                          </div>
                          {/* <a href="www.gmaven.com" className="more">
                            <span>+</span> More
                          </a> */}
                        </div>
                        <div className="spaces_main">
                          <div>
                            {item.spaceBreakdown.spaces.length > 0 &&
                              item.spaceBreakdown.spaces.map(
                                (item1, index1) => {
                                  console.log("::", item1);
                                  return (
                                    <div
                                      className="spaces"
                                      style={{
                                        width: `${
                                          100 /
                                          item.spaceBreakdown.spaces.length
                                        }%`,
                                      }}
                                    >
                                      <div className="head_space">
                                        <p>
                                          Unit {item.name}{" "}
                                          <span className="highlight">
                                            / {item1.spaceId}
                                          </span>
                                        </p>
                                        <div class="cut-corner filled more1">
                            <a href="www.gmaven.com" className="more button3 highlight">
                            <span>+</span> more
                            </a>
                          </div>
                                      </div>
                                      <div className="details_spaces">
                                        <div className="icon">
                                          <i class="fa fa-chess-board"></i>
                                        </div>
                                        <div className="first">
                                          <p>GLA</p>
                                          <p>
                                            {item1.gla}m<sup>2</sup>
                                          </p>
                                        </div>
                                        <div className="second"></div>
                                      </div>
                                      <div className="details_spaces">
                                        <div className="icon">
                                          <i class="fas fa-coins"></i>
                                        </div>
                                        <div className="first">
                                          <p>Asking Gross</p>
                                          <p>
                                            {item1.grossAskingRental}/m
                                            <sup>2</sup>
                                          </p>
                                        </div>
                                        <div className="second">
                                          <p>Asking Net</p>
                                          <p>
                                            {item1.netAskingRental}/m
                                            <sup>2</sup>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="details_spaces no-border">
                                        <div className="icon">
                                          <i className="fa fa-building"></i>
                                        </div>
                                        <div className="first">
                                          <p>Category</p>
                                          <p>{item1.category}</p>
                                        </div>
                                        <div className="second">
                                          {/* <p>Space Type</p>
                                  <p>GLA</p> */}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                          </div>
                          <div className="bottom_space">
                            <div className="spaces_bottom_details">
                              <p>Availability</p>
                              <p>{item.availableFrom}</p>
                              {/* {new Date(item.availableFrom, "dd mm yyyy")} */}
                            </div>
                            <div className="spaces_bottom_details d-flex">
                              <div className="icon">
                                <i className="fa fa-building"></i>
                              </div>
                              <div className="">
                                <p>Floor</p>
                                <p>{item.floors}</p>
                              </div>
                            </div>
                            {item.subDivisible && (
                              <div className="spaces_bottom_details">
                                <div className="d-flex">
                                  <div className="icon">
                                    <i className="fa fa-film"></i>
                                  </div>
                                  <div className="">Subdivisible</div>
                                </div>
                                <div className="sub">
                                  <p>Sizes</p>
                                  <p>
                                    {item.minSubDivision}m<sup>2</sup>
                                  </p>
                                </div>
                              </div>
                            )}
                            {item.combinable && (
                              <div className="spaces_bottom_details d-flex">
                                <div className="icon">
                                  <i className="fa fa-compress"></i>
                                </div>
                                <div className="">
                                  <p>combinable</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  );
                }
              })}
            </div>
            <div className="footer">
              {data.hasBrokerLogo && (
                <div className="logo">
                  <img src={data.brokerLogo} />
                </div>
              )}
              {data.hasWebsite && (
                <div className="website">
                  <a href="www.gmaven.com">www.gmaven.com</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UnitInformationPage;
