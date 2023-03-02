import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-3'>
                <img src='/images/main.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='main-banner-content position-absolute'>
                  <h4>Best Selling</h4>
                  <h5>COVID-19 Prevention <br /> & Care </h5>
                  <p>Collection of products that <br /> help you to protect you and <br /> your beloved.</p>
                  <Link className='button'>Buy now</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-item-center'>
              <div className='small-banner position-relative'>
                <img src='/images/main1.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Best Sale</h4>
                  <h5>COVID-19 Care </h5>
                  <p>From $999.00 <br/> $41.62/mo. </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='/images/main2.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>COVID-19 Care </h5>
                  <p>From $999.00 <br/> $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='/images/main1.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>COVID-19 Care </h5>
                  <p>From $999.00 <br/> $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='/images/main2.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>COVID-19 Care </h5>
                  <p>From $999.00 <br/> $41.62/mo.</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-02.png' alt='services' />
                  <div>
                    <h6>Daily Suprise offers</h6>
                    <p className='mb-0'>Save upto 25% off </p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-03.png' alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-04.png' alt='services' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-05.png' alt='services' />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Medical Accessories</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='/images/medical1.jpg' alt='medical1' />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Blood Pressure</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='/images/blood.png' alt='blood' />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Face Mask</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='/images/mask1.png' alt='mask1' />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Hospital Equipment</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='/images/hospital1.jpg' alt='hospital1' />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Medical Accessories</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='/images/medical1.jpg' alt='medical1' />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Blood Pressure</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='/images/blood.png' alt='blood' />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Face Mask</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='/images/mask1.png' alt='mask1' />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Hospital Equipment</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='/images/hospital1.jpg' alt='hospital1' />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>

      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/famous-1.jpg' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                <h5>Hospital Equipment</h5>
                <h6>Manual Oxygen Device</h6>
                <p> $199</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/famous-2.jpg' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                <h5>Hospital Equipment</h5>
                <h6>Cara Portable Air Compressor</h6>
                <p> $199</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/famous-3.jpg' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                <h5>Hospital Equipment</h5>
                <h6>Surgical Latex Gloves</h6>
                <p> $199</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/famous-4.jpg' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                <h5>Hospital Equipment</h5>
                <h6>12-Ply Gauze Sponges</h6>
                <p> $199</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
          <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
            <div className='row'>
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/>
            </div>
          </div>
        </div>
      </section>

      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          </div>
          <div className='row'>
          <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>

      <section className='marque-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper bg-white p-3 card-wrapper'>
              <Marquee className='d-flex'>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-1.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-2.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-3.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-4.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-5.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-6.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-7.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-8.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-9.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-10.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-11.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='/images/brand/brand-12.png' alt='brand' />
                    </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home