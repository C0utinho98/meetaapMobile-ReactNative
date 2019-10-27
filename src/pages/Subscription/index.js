import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {cancelSubscriptionRequest} from '../../store/modules/meetup/actions';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import Backgroung from '../../components/Background';
import Header from '../../components/Header';
import MeetupSubscription from '../../components/MeetupSubscription';
import api from '../../services/api';
import {Container, List} from './styles';

function Subscription({isFocused}) {
  const [inscritos, setInscritos] = useState([]);
  const dispatch = useDispatch();

  async function loadSubscriptions() {
    const reponse = await api.get('subscriptions');
    setInscritos(reponse.data);
    console.tron.log(reponse);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleCancelSubscribe(id) {
    dispatch(cancelSubscriptionRequest(id));
  }
  return (
    <Backgroung>
      <Header />

      <Container>
        <List
          data={inscritos}
          onEndReached={() => {}}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <MeetupSubscription
              onPress={() => {
                handleCancelSubscribe(item.id);
              }}
              meetup={item}>
              Cancelar inscrição
            </MeetupSubscription>
          )}
        />
      </Container>
    </Backgroung>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscription);

Subscription.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};
