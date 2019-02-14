import SecureTemplate from '../static/secure-template';
import PropTypes from 'prop-types';
import User from '../component/User';

const Dashboard = ({ loggedInUser }) => (
  <>
  {/* <div>
    Hi 
    { loggedInUser.nickname }! 
    <img src={ loggedInUser.picture } width="100px" />
    <div>
      { JSON.stringify(loggedInUser, null, 2) }
    </div>
  </div> */}
    <User data={loggedInUser} />
  </>
)
Dashboard.propTypes = {
  loggedInUser: PropTypes.object
};


export default SecureTemplate(Dashboard);