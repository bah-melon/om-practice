import { useEffect, useState } from 'react';
import '../../design/Global.scss';

export default function Indicator({type}){
    const [visible, setVisible] = useState('none');
    const [message, setMessage] = useState('');
    const [icon, setIcon] = useState();
    const [bgColor, setBgColor] = useState('');

    useEffect(()=>{
        handleType();
    },[type]);

    const handleType = () => {
        if(type==="positionCreated"){
            setVisible('flex');
            setMessage('New position has been created!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.5"/> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                    </svg>);
            setBgColor('#79B388');
        }
        else if(type==="fillRequiredFields"){
            setVisible('flex');
            setMessage('Please fill all required fields');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF">

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <title>error</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="add" fill="#FFFFFF" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error"> </path> </g> </g> </g>
                
                </svg> );
            setBgColor('#e62525');
        }
        else if(type==="positionNotCreated"){
            setVisible('flex');
            setMessage('New position has not been created!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF">

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <title>error</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="add" fill="#FFFFFF" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error"> </path> </g> </g> </g>
                
                </svg> );
            setBgColor('#e62525');
        }
        else if(type==="loggedIn"){
            setVisible('flex');
            setMessage('User has successfully logged in!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.5"/> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                    </svg>);
            setBgColor('#79B388');
        }
        else if(type==="notLoggedIn"){
            setVisible('flex');
            setMessage('Wrong credentials!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF">

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <title>error</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="add" fill="#FFFFFF" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error"> </path> </g> </g> </g>
                
                </svg> );
            setBgColor('#e62525');
        }
        else if(type==="failedToLogIn"){
            setVisible('flex');
            setMessage('Failed to log in!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF">

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <title>error</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="add" fill="#FFFFFF" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error"> </path> </g> </g> </g>
                
                </svg> );
            setBgColor('#e62525');
        }
        else if(type==="applicationCreated"){
            setVisible('flex');
            setMessage('New position has been created!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.5"/> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                    </svg>);
            setBgColor('#79B388');
        }
        else if(type==="applicationNotCreated"){
            setVisible('flex');
            setMessage('New position has been created!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF">

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <title>error</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="add" fill="#FFFFFF" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error"> </path> </g> </g> </g>
                
                </svg> );
            setBgColor('#e62525');
        }
        else if(type==="passwordChanged"){
            setVisible('flex');
            setMessage('Password changed sucessfully!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.5"/> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                    </svg>);
            setBgColor('#79B388');
        }
        else if(type==="passwordLength"){
            setVisible('flex');
            setMessage('Minimum 8 characters are required!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF">

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <title>error</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="add" fill="#FFFFFF" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error"> </path> </g> </g> </g>
                
                </svg> );
            setBgColor('#e62525');
        }
        else if(type==="wrongPassword"){
            setVisible('flex');
            setMessage('Wrong current password!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF">

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <title>error</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="add" fill="#FFFFFF" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error"> </path> </g> </g> </g>
                
                </svg> );
            setBgColor('#e62525');
        }
        else if(type==="wrongConfirmPassword"){
            setVisible('flex');
            setMessage('Confirm Password does not match New Password!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF">

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <title>error</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="add" fill="#FFFFFF" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error"> </path> </g> </g> </g>
                
                </svg> );
            setBgColor('#e62525');
        }
        else if(type==="mailSent"){
            setVisible('flex');
            setMessage('Mail sent sucessfully!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.5"/> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                    </svg>);
            setBgColor('#79B388');
        }
        else if(type==="mailNotSent"){
            setVisible('flex');
            setMessage('Failed to sent mail!');
            setIcon(<svg width="35px" height="35px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF">

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <title>error</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="add" fill="#FFFFFF" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z" id="error"> </path> </g> </g> </g>
                
                </svg> );
            setBgColor('#e62525');
        }
        else{
            setVisible('none');
        }

        const timer = setTimeout(() => {
            setVisible('none');
        }, 5000);

        return () => clearTimeout(timer);
    }

    return(
        <div class="alert" onLoad={handleType} style={{display: `${visible}`, backgroundColor: `${bgColor}`}}>
            {icon}
            <div className='message'>{message}</div>
            <span className="closebtn" onClick={()=>{setVisible('none')}}><svg width='35px'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg></span> 
        </div>
    )
}