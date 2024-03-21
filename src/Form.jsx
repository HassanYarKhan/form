import React, { useState } from 'react'


function Form() {

    

const [formData, setFormData] = useState({
    FirstName:"",
    LastName:"",
    email:"",
    Country:"India",
    City:"",
    State:"",
    ZIP:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""
})
  function submitHandler(e){
        e.preventDefault();
        console.log(formData);
  }
  function changeHandler(e){

    setFormData((prevState)=>{
        return({
            ...prevState,
            [e.target.name]: e.target.value
        })
    })
  }
  return (
    <div className='flex w-2/5 h-fit p-4 bg-slate-600  rounded-lg shadow-lg' >
        <form onSubmit={submitHandler} className='w-full px-4'>


            <label htmlFor="FirstName">First Name</label>
            <br />
            <input type="text"
            className='w-full rounded-lg bg-slate-300 text-slate-950 px-2'
            placeholder='John'
            name='FirstName'
            id='FirstName'
            value={formData.FirstName}
            onChange={changeHandler} />


            <label htmlFor="LastName">Last Name</label>
            <br />
            <input type="text"
            className='w-full rounded-lg bg-slate-300 text-slate-950 px-2'
            placeholder='Doe'
            name='LastName'
            id='LasttName'
            value={formData.LastName}
            onChange={changeHandler}  />

            <label htmlFor="email">Email Address</label>
            <br />
            <input type="email"
            className='w-full rounded-lg bg-slate-300 text-slate-950 px-2'
            placeholder='1234@xyz.com'
            name='email'
            id='email'
            value={formData.email}
            onChange={changeHandler}  />     

            <label htmlFor="Country">Country</label>
            <br />
            <select name="Country"
            className='w-full rounded-lg bg-slate-300 text-slate-950 px-2'
            value={formData.Country} onChange={changeHandler} >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Russia">Russia</option>
                <option value="China">China</option>
            </select>  

            <label htmlFor="City">City</label>
            <br />
            <input type="text"
            className='w-full rounded-lg bg-slate-300 text-slate-950 px-2'
            placeholder='Delhi'
            name='City'
            id='City'
            value={formData.City}
            onChange={changeHandler}  />

            <label htmlFor="State">State/Province</label>
            <br />
            <input type="text"
            className='w-full rounded-lg bg-slate-300 text-slate-950 px-2'
            placeholder='Delhi'
            name='State'
            id='State'
            value={formData.State}
            onChange={changeHandler}  />  

            <label htmlFor="ZIP">ZIP/Postal Code</label>
            <br />
            <input type="text"
            className='w-full rounded-lg bg-slate-300 text-slate-950 px-2'
            placeholder='160014'
            name='ZIP'
            id='ZIP'
            value={formData.ZIP}
            onChange={changeHandler}  />

            <div>
                <br />
                <p>By Email</p>
                <input type="checkbox"
                 id='comments'
                 name='comments' 
                 checked={formData.comments}
                 onChange={changeHandler} />
                 <label htmlFor="comments" className='px-2'>Comments</label>
                 <p className='text-slate-400 text-sm'>Get notified when someone posts a comment</p>

                <input type="checkbox"
                 id='candidates'
                 name='candidates'
                 onChange={changeHandler}
                 checked={formData.candidates}  />
                 <label htmlFor="candidates" className='px-2'>Candidates</label>
                 <p className='text-slate-400 text-sm'>Get notified when a candiate applies for a job</p>

                <input type="checkbox"
                 id='offers'
                 name='offers' 
                 checked={formData.offers}
                 onChange={changeHandler} />
                 <label htmlFor="offers" className='px-2'>Offers</label>
                 <p className='text-slate-400 text-sm'>Get notified when a candidate accepts or rejects an offer</p>
            </div>

            <div>
                <br />
                <p>Push Notifications</p>
                <p className='text-slate-400 text-sm'>These are delivered via SMS on your phone</p>

                <br />
                <input type="radio"
                id="everything"
                name="pushNotifications" 
                value="Everything"
                onChange={changeHandler} />
                <label htmlFor="everything" className='px-2'>Everything</label>

                <br />
                <input type="radio"
                id="sameAsEmail"
                name="pushNotifications" 
                value="Same as Email"
                onChange={changeHandler} />
                <label htmlFor="sameAsEmail" className='px-2'>Same as Email</label>

                <br />
                <input type="radio"
                id="none"
                name="pushNotifications"
                value="No push Notifications" 
                onChange={changeHandler} />
                <label htmlFor="none" className='px-2'>No push Notifications</label>
            </div>

            <button className='bg-blue-700 px-6 py-2 rounded-lg text-xl my-4'>Save</button>
        </form>
    </div>
  )
}

export default Form