import React from 'react';
import '../App.css';
import IllustrationSignUp from './illustration-sign-up-desktop.svg';
import { COLORS } from '../colors';
import { TickEntry } from './tickEntry';
import TickImage from '../assets/images/icon-list.svg';
import '../assets/fonts/Roboto-Regular.ttf';
import '../assets/fonts/Roboto-Bold.ttf';



export default function SignUp() {

    const [success, setSuccess] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);

    const [emailErrorMessage, setEmailErrorMessage] = React.useState("");

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function handleInputChange(event) {
        setEmailError(false);
        setEmail(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (validateEmail(email)) {
            setEmailError(false);
            setEmailErrorMessage("");
            setSuccess(true);
        } else {
            setEmailError(true);
            setEmailErrorMessage("Valid email required");
        }
    }

    // Function to display error message if email is not valid. If no error, return empty fragment.
    function ErrorDisplay() {
        if (emailError === true) {
            return (
                <div className='errorMessage' style={{color:COLORS.red}}>{emailErrorMessage}</div>
            )
        } else {
            return (<>
            
            </>);
        }
    }

    function SuccessPanel({ email }) { return (
        <div className='successPanel'>
          <img src={TickImage} alt="Tick" className="bigTickImage"/>
          <h4 className='title' style={{color:COLORS.darkslategrey, marginTop: "30px"}}>Thanks for subscribing!</h4>
          <p className='description' style={{color:COLORS.darkslategrey}}>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
          <button type="button" onClick={() => setSuccess(false)} className='Button' style={{marginBottom:"30px"}}>Dismiss message</button> 
        </div> )
    };

        

        return (<div className='panel'>
            {success ? (<SuccessPanel email={email} />)
             : (<div style={{display: "flex", flexDirection:"row"}}>
            <div className='contentPanel'>
                <h4 className='title' style={{color:COLORS.darkslategrey}}>Stay updated!</h4>
                <p className='description' style={{color:COLORS.darkslategrey}}>Join 60,000+ product managers reciving monthly updates on:</p>
                <TickEntry title='Product discovery and building what matters'/>
                <TickEntry title='Measuring to ensure updates are a success'/>
                <TickEntry title='And much more!'/>
        
                <form className='form'>
                    <div style={{display: 'flex', flexDirection: "row", justifyContent:"space-between"}}><div className='formTitle'>Email address</div> <ErrorDisplay /></div>
                    <input type='email' value={email}
                        onChange={handleInputChange}
                        placeholder='email@company.com' className='formInput' style={emailError === false ? {borderColor:COLORS.grey} : {borderColor:COLORS.red, backgroundColor: "#FFE8E6", color: COLORS.red} }/>
                    <button type='submit' onClick={handleSubmit} className='Button'>Subscribe to monthly newsletter</button> </form>
            </div>
                <img src={IllustrationSignUp} alt='Illustration' className='illustration'/>
                </div>) }</div>)
}