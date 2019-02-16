import SecureTemplate from '../../static/secure-template';
import PropTypes from 'prop-types';
import User from '../../component/User';

const Index = ({ loggedInUser }) => (
  <>
    <User data={loggedInUser} />
  </>
)
Index.propTypes = {
  loggedInUser: PropTypes.object
};


export default SecureTemplate(Index);