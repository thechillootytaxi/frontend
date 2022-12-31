import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify';
import { useState } from "react";
import packageData from "../../assets/data/packageData";

const FindCarForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async(data) => {
    setIsloading(true)
    try {
      await axios.post('https://backend-thechillootytaxi-gmailcom.vercel.app/api/sendEmail', data)
      reset();
      setIsloading(false)
      toast.success('Message has been sent successfully');
    } catch (error) {
      console.log(error)
      setIsloading(false)
      toast.error('Server issue, Please Try Later')
    }
  }
  const locMasters = ['Ooty', 'Coimbatore', 'Mysore', 'Bangalore']
  const [isLoading, setIsloading] = useState(false);
  const getDate = () => {
    let myDate = new Date();
    const offset = myDate.getTimezoneOffset();
    let temp1 = new Date(myDate.getTime() - (offset*60*1000));
    let temp2 = temp1.toISOString().split('T')[0];
    return(temp2);
  };
  return (
    <Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Name" {...register("name", { required: true })}/>
          {errors.name && <span className="error-text">This field is required</span>}
        </FormGroup>

        {/* <FormGroup className="form__group">
          <input type="text" placeholder="Last Name" required />
        </FormGroup> */}
        <FormGroup className="form__group">
          <input type="text" placeholder="Email" {...register("email", { required: false })}/>
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Phone Number" {...register("phone", { required: true })}/>
          {errors.phone && <span className="error-text">This field is required</span>}
        </FormGroup>

        <FormGroup className="select__group">
          <select {...register("fromCity", { required: false })}>
            <option value='' hidden>Select From City</option>
            {locMasters.map((item, ind)=>(
              <option value={item} key={ind}>{item}</option>
            ))}
          </select>
          {errors.fromCity && <span className="error-text">This field is required</span>}
        </FormGroup>

        <FormGroup className="select__group">
          <select {...register("toCity", { required: false })}>
            <option value='' hidden>Select To City</option>
            {locMasters.map((item, ind)=>(
              <option value={item} key={ind}>{item}</option>
            ))}
          </select>
          {errors.toCity && <span className="error-text">This field is required</span>}
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" {...register("journeyDate", { required: true })} min={getDate()}/>
          {errors.journeyDate && <span className="error-text">This field is required</span>}
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            {...register("journeyTime", { required: true })}
          />
          {errors.journeyTime && <span className="error-text">This field is required</span>}
        </FormGroup>
        <FormGroup className="select__group">
          <select {...register("package", { required: false })}>
            <option value='' hidden>Select Package</option>
            {packageData.map((item)=>(
              <option value={item.packageName}>{item.packageName}</option>
            ))}
          </select>
          {errors.package && <span className="error-text">This field is required</span>}
        </FormGroup>
        <FormGroup className="select__group">
          <select {...register("count", { required: true })}>
            <option value='' hidden>Count</option>
            <option value="1 person">1 person</option>
            <option value="2 person">2 person</option>
            <option value="3 person">3 person</option>
            <option value="4 person">4 person</option>
            <option value="5+ person">5+ person</option>
          </select>
          {errors.count && <span className="error-text">This field is required</span>}
        </FormGroup>

        <FormGroup className="form__group" style={{width:'100%'}}>
          <textarea rows={5} className="textarea" type="textarea" placeholder="Write" {...register("messege", { required: false })}></textarea>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn" type="submit" disabled={isLoading}>Book a Ride</button>
          {isLoading && <h5>Sending...</h5>}
        </FormGroup>
        
      </div>
    </Form>
  );
};

export default FindCarForm;