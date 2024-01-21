import React from 'react'; 
import bg from '../images/bg.jpg';

const Grid = () => {
  return (
    <div className='grid'>
      <h1>Recent Blog Posts</h1>
      <div className="container">
        {/* image1 */}
        <div className="box-1">
          <img src={bg} className="img-fluid" alt="" />
          <h3>Northern Lights</h3>

          <div className='profile-name'>
          <img src={bg} className="profile" alt="" height={50} width={50}/>
           <h4>Personal name</h4>
          </div>

          <p>A paragraph is a series of sentences that are
             organized and coherent, and are all related to a single topic.</p>

             <button>View Post</button>
        </div>
        {/* image2 */}
        <div className="box-2">
          <img src={bg} className="img-fluid" alt="" />
          <h3>Northern Lights</h3>

          <div className='profile-name'>
          <img src={bg} className="profile" alt="" height={50} width={50}/>
           <h4>Personal name</h4>
          </div>

          <p>A paragraph is a series of sentences that are
             organized and coherent, and are all related to a single topic.</p>

             <button>View Post</button>

        </div>
        {/* image3 */}
        <div className="box-3">
          <img src={bg} className="img-fluid" alt="" />
          <h3>Northern Lights</h3>

          <div className='profile-name'>
          <img src={bg} className="profile" alt="" height={50} width={50}/>
           <h4>Personal name</h4>
          </div>

          <p>A paragraph is a series of sentences that are
             organized and coherent, and are all related to a single topic.</p>

             <button>View Post</button>

        </div>
      </div>
    <input type='button' value="Load More" className='load-btn'/>
    </div>
  )
}

export default Grid;
