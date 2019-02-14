import SecureTemplate from '../static/secure-template';
import PropTypes from 'prop-types';
import User from '../component/User';

const Dashboard = ({ loggedInUser }) => (
  <>
    <User data={loggedInUser} />
  </>
)
Dashboard.propTypes = {
  loggedInUser: PropTypes.object
};


export default SecureTemplate(Dashboard);