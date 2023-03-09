import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi"

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title='Contact Us' />
      <div className='contact-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d567.0641348575352!2d85.34856520040219!3d27.718245410699875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1979f9421f8f%3A0xd6e0c21ed996dfac!2sUnitech%20IT%20Solution%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1678351784669!5m2!1sen!2snp" width="600" height="400" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' cols='30' rows='4' placeholder='comments' ></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome className='fs-5' />
                      <address className='mb-0'>Hno:000, Near KL Tower, Chabahil-7, Kathmandu</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><BiPhoneCall className='fs-5' />
                      <a href='tel:+977 9868001122'>+977 9868001122</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5' />
                      <a href='mailto:medizin@g,mail.com'>medizin@g,mail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><BiInfoCircle className='fs-5' />
                      <p className='mb-0'>Monday -  Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
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

export default Contact