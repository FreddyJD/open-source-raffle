import SecureTemplate from '../../static/secure-template';
import PropTypes from 'prop-types';
import AddRaffles from '../../component/User/AddRaffles';

const Dashboard = ({ loggedInUser }) => (
  <>
    <AddRaffles data={loggedInUser} />
  </>
)
Dashboard.propTypes = {
  loggedInUser: PropTypes.object
};


export default SecureTemplate(Dashboard);