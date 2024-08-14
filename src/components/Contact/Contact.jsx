import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "f14af99f-870a-4e02-bca9-893a956dffe3");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
            //   console.log("Success", res);
        }
    };

    return (
        <>
            <div id='contact' className="contact">
                <div className="contact-title">
                    <h1>Get in touch</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk</h1>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure neque eveniet aliquam accusamus quis autem nihil consequatur aperiam distinctio mollitia ut tempore, aspernatur itaque debitis cupiditate voluptatibus possimus. Repellat?</p> */}
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail_icon} alt="" srcset="" />
                                <p>
                                sonukumarbhagat086@gmail.com
                                </p>
                            </div>
                            <div className="contact-detail">
                                <img src={call_icon} alt="" srcset="" />
                                <p>
                                    7488259432
                                </p>
                            </div>
                            <div className="contact-detail">
                                <img src={location_icon} alt="" srcset="" />
                                <p>
                                    NIT Sikkim, Ravangla
                                </p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter your name' name='name' />
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder='Enter your email' name='email' />
                        <label htmlFor="">Write Your Message Here</label>
                        <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
                        <button type='submit' className='contact-submit'>Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact
