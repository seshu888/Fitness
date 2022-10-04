import './mailList.css'
const MailList=()=>{
    return(
        <div className='mailList'>
            <div className='mailListWrapper'>
                <h1>Save time and Save money</h1>
                <h3>Sign up we will send the best deals for you</h3>
                <div className='mailListInputContainer'>
                    <input placeholder='enter your mail here'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default MailList