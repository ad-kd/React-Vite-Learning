import React from 'react'
import './contact.css'
import messageicon from '../../assets/msg-icon.png'
import mailicon from '../../assets/mail-icon.png'
import phoneicon from '../../assets/phone-icon.png'
import locationicon from '../../assets/location-icon.png'
import whitearrow from '../../assets/white-arrow.png'

const contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "dcacf076-fc6a-4b1c-9edd-0bc1d2975f02");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            console.log("Success", data);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={messageicon} alt="" /></h3>
                <p>Feel free to reach out through our contact form or find our contact information below.
                    Your feedback, questions, and suggestions are important to us as we strive to provide
                    exceptional service to our university community.</p>
                <ul>
                    <li><img src={mailicon} alt="" />adkd.discord@gmail.com</li>
                    <li><img src={phoneicon} alt="" />+91 ***** *****</li>
                    <li><img src={locationicon} alt="" />Madurai -625 012,<br />Tamil Nadu, india</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />

                    <label>Your Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Phone No - ' required />

                    <label>Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Type Your Message Here...' required></textarea>

                    <button type='submit' className='btn dark-btn'>Send Message <img src={whitearrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default contact