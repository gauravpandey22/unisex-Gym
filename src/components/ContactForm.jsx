 
import React,{useState} from 'react'


const ContactForm = () => {

    // using useState

    const [form,setForm]=useState({
        name:'',
        age:'',
        contact:'',
        email:''
    })

    const handleChange=(e)=>{
           const name = e.target.name
           const value  = e.target.value
            setForm((oldData)=>(
                {
                    ...oldData,
                    [name] : value

            }))     
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(form);
        
         setForm({name:'',
            age:'',
            contact:'',
            email:''
         })
    }
    return (

        <div>
            <div className="modal fade  " id="contactModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content enquiry-model">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-center w-100 text-info" id="exampleModalLabel">Contact<span className='text-info'> Form</span></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Name</span>
                                    <input type="text"  onChange={handleChange} value={form.name}  name='name' className="form-control" placeholder="Enter Your Name" aria-label="Username" aria-describedby="basic-addon1" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Age</span>
                                    <input type="number" onChange={handleChange} value={form.age} name='age' className="form-control" placeholder="Enter Your Age" aria-label="Username" aria-describedby="basic-addon1" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Contact</span>
                                    <input type="number" onChange={handleChange} value={form.contact} name='contact' className="form-control" placeholder="Enter Your Contacct detail" aria-label="Username" aria-describedby="basic-addon1" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Email</span>
                                    <input type="email" onChange={handleChange} value={form.email} name='email' className="form-control" placeholder="Enter Your Email Id" aria-label="Username" aria-describedby="basic-addon1" required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" onClick={handleSubmit} className="btn btn-info">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm


























{/* <div className="modal fade" id='reg-modal' tabIndex='-1' aria-labelledby='modal-title' aria-hidden='true'>
        <div className="modal-dialogue">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className='modal-title' id='modal-title'>Enquiry form</h5>
                    
                </div>
            </div>
        </div>
      </div> */}