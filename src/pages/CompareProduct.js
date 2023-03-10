import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'
import Meta from '../components/Meta'

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compare Products"} />
            <BreadCrumb title='Compare Products' />
            <div className='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image'>
                                    <img src='/images/mask1.png' className='img-fluid' alt='mask' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>
                                        Search Lab N95 Face Mask
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$ 15.00</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>3M</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Mask</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image'>
                                    <img src='/images/mask.jpg' className='img-fluid' alt='mask' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>
                                        Anti-Virus Carbon Mask
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$ 10.00</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>EcoBreathe</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Mask</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image'>
                                    <img src='/images/dbp.jpg' className='img-fluid' alt='blood pressure' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>
                                        Digital Arm Blood Pressure
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$ 60.00</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Omron</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>BP Machine</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image'>
                                    <img src='/images/medical1.jpg' className='img-fluid' alt='sanitizer' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>
                                        Anti-Septic Dry Hand Gel
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$ 17.00</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Dettol</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Sanitizer</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct