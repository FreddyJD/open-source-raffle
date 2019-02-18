import SecureTemplate from '../../static/secure-template';
import PropTypes from 'prop-types';
import AllRaffles from '../../component/User/ActiveRaffles';

const ActiveRaffles = ({ loggedInUser }) => (
  <>
    <AllRaffles data={loggedInUser} />
  </>
)
ActiveRaffles.propTypes = {
  loggedInUser: PropTypes.object
};


export default SecureTemplate(ActiveRaffles);