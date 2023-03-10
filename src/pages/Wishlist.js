import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title='Wishlist' />
            <div className='wishlist-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                            <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                <img src='/images/mask1.png' className='img-fluid w-100 bg-white' alt='mask' />
                                </div>
                                <div className='py-3 px-3'>
                                <h5 className='title'>
                                        Search Lab N95 Face Mask
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$ 15.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                            <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                <img src='/images/dbp.jpg' className='img-fluid w-100 bg-white' alt='blood pressure' />
                                </div>
                                <div className='py-3 px-3'>
                                <h5 className='title'>
                                Digital Arm Blood Pressure
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$ 60.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                            <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                <img src='/images/medical1.jpg' className='img-fluid w-100 bg-white' alt='sanitizer' />
                                </div>
                                <div className='py-3 px-3'>
                                <h5 className='title'>
                                Anti-Septic Dry Hand Gel
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$ 17.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist