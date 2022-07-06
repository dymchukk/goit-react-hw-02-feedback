import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <p style={{ color: '#ff5252' }} className="noti">
      {message}
    </p>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;