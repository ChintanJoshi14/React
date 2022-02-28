import './UserCard.css';
// import d1 from '../images/d1-modified.png'

function UserCard(props) {

    return (
        
            <div className="user-card-layout">
            <div className='demo'>

               <div className="image-layout">
                   <img src={props.data.avatar} width="125px" margin="1rem auto" ></img>
               </div>

               <div className="text-content">
                   <div className="user-name">
                    {props.data.firstName+ " "}
                    {props.data.lastName}
                   </div>
                   <div className='user-email'>{props.data.email}</div>
                   <div className='plan'>Your Plan: Standard</div>
                </div>
                
                <div className='btn'>
                    <button>Active User</button>
                </div>

                <div className='progress-bar-layout'>
                    Plan Uses
                    <div className='progress-bar-1'>
                        <div className='progress-bar-2'></div>
                    </div>
                </div>

                <div className='stats'>
                    <div className='left'>2,450
                    <div className='left-sub'>clicks reviewed</div>
                    </div>
                    <div className='line'></div>
                    <div className='right'>5000
                    <div className='right-sub'>Monthly clicks</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default UserCard;