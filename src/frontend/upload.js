import "../frontend/student-portal/css/teach.css"
import CreatePost from "../test/CreatePost"

(function () {
'use strict'
const forms = document.querySelectorAll('.requires-validation')
Array.from(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


function Teacher() {
return (
<>
<div className="test">
    <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Course details</h3>
                        <p>Fill in the data below.</p>
                        <div className="requires-validation" novalidate>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="name" placeholder="Title" required onChange={(event) => {
               setTitle(event.target.value);
            }} />
                               <div className="valid-feedback"></div>
                               <div className="invalid-feedback"></div>
                            </div>

                            <div className="col-md-12">
                                <textarea className="text" type="email" name="email" placeholder="Short intro" required />
                                 <div className="valid-feedback"></div>
                                 <div className="invalid-feedback"></div>
                            </div>

                           <div className="col-md-12">
                              <input className="form-control" type="number" name="password" placeholder="Price" required /> 
                               <div className="valid-feedback"></div>
                               <div className="invalid-feedback"></div>
                           </div>
                  

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</>
);
};

export default Teacher;