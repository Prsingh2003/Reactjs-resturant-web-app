import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="box mt-4">

        <div className="col-12 col-sm-12 m-10 p-5 pt-5">
          <form className="row g-3 needs-validation" noValidate>
            <h1>Contact Form</h1>
            <div className="col-md-4 position-relative">
              <label htmlFor="validationTooltip01" className="form-label">First name</label>
              <input type="text" className="form-control" id="validationTooltip01" required />
              <div className="valid-tooltip">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <label htmlFor="validationTooltip02" className="form-label">Last name</label>
              <input type="text" className="form-control" id="validationTooltip02" required />
              <div className="valid-tooltip">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <label htmlFor="validationTooltipUsername" className="form-label">Email</label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="validationTooltipUsernamePrepend"><i className="bi bi-envelope text-primary"></i></span>
                <input type="Email" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                <div className="invalid-tooltip">
                  Please choose a unique and valid username.
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="validationTooltip03" className="form-label">City</label>
              <input type="text" className="form-control" id="validationTooltip03" required />
              <div className="invalid-tooltip">
                Please provide a valid city.
              </div>
            </div>

            <div className="col-md-3 position-relative">
              <label htmlFor="validationTooltip05" className="form-label">Zip</label>
              <input type="text" className="form-control" id="validationTooltip05" required />
              <div className="invalid-tooltip">
                Please provide a valid zip.
              </div>
            </div>
            <div className="col-12 mb-5">
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112064.49927420309!2d77.3148696928363!3d28.629294480179233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe623d4d2a1%3A0xa6425feb701da730!2sMaa%20Durga%20Mandir!5e0!3m2!1sen!2sin!4v1699105196009!5m2!1sen!2sin" height="200vh" width="100%" loading="lazy" ></iframe>
            </div>
          </form>


        </div>
      </div>

    </div>
  )
}

export default Contact
