import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const OurStore = () => {
    return (
        <>
        <Meta title={"Our Store"} />
            <BreadCrumb title='Our Store' />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Shop By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Blood Pressure</li>
                                        <li>Facemask</li>
                                        <li>Pharmacy</li>
                                        <li>Hospital Equipment</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Filter By</h3>
                            <div>
                                <h5 className='sub-title'>Availability</h5>
                                <div className='form-check'>
                                    <input class='form-check-input' type='checkbox' value='' id='' />
                                    <label class='form-check-label' for=''>
                                        Default checkbox
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input class='form-check-input' type='checkbox' value='' id='' checked />
                                    <label class='form-check-label' for=''>
                                        Checked checkbox
                                    </label>
                                </div>
                            </div>
                            </div>
                            <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Product Tags</h3>
                            </div>
                            <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Random Products</h3>
                            </div>
                        </div>
                        <div className='col-9'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore