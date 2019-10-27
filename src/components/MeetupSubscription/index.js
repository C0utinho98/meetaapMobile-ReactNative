import React from 'react';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {
  Container,
  ImageMeetup,
  Info,
  Title,
  Span,
  SubmitButton,
} from './styles';

export default function MeetupSubscription({meetup, onPress, children}) {
  return (
    <Container>
      <ImageMeetup
        source={{
          uri: meetup.File.url,
        }}
      />
      <Info>
        <Title>{meetup.title}</Title>
        <Span>
          <Icon name="event" />
          {format(parseISO(meetup.date), "dd 'de' MMMM', às 'H:mm", {
            locale: pt,
          })}
        </Span>
        <Span>
          <Icon name="room" size={15} />
          {meetup.localization}
        </Span>
        <Span>
          <Icon name="person" size={15} />
          {meetup.User.name}
        </Span>
        <SubmitButton onPress={onPress}>{children}</SubmitButton>
      </Info>
    </Container>
  );
}

MeetupSubscription.propTypes = {
  children: PropTypes.string.isRequired,
  meetup: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired,
    File: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
    localization: PropTypes.string.isRequired,
    User: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onPress: PropTypes.func,
};

MeetupSubscription.defaultProps = {
  onPress: undefined,
};
