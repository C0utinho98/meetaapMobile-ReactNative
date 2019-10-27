import React, {useState, useMemo, useEffect} from 'react';
import {format, subDays, addDays} from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../services/api';
import {useDispatch} from 'react-redux';
import {subscriptionRequest} from '../../store/modules/meetup/actions';
import Background from '../../components/Background';
import Header from '../../components/Header';
import MeetupSubscription from '../../components/MeetupSubscription';

import {Container, Title, List, ButtonDate, Navigator, Icon} from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", {locale: pt}),
    [date],
  );

  useEffect(() => {
    async function getMeetups() {
      const dt = format(date, 'yyyy-MM-dd');
      const response = await api.get(`meetup?date=${dt}`);
      setMeetups(response.data);
    }
    getMeetups();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }
  function handleNextDat() {
    setDate(addDays(date, 1));
  }

  function handleSubscribe(id) {
    dispatch(subscriptionRequest(id));
  }

  return (
    <Background>
      <Header />
      <Container>
        <Navigator>
          <ButtonDate onPress={handlePrevDay}>
            <Icon name="chevron-left" />
          </ButtonDate>
          <Title>{dateFormatted}</Title>
          <ButtonDate onPress={handleNextDat}>
            <Icon name="chevron-right" />
          </ButtonDate>
        </Navigator>
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <MeetupSubscription
              onPress={() => {
                handleSubscribe(item.id);
              }}
              meetup={item}>
              Realizar inscrição
            </MeetupSubscription>
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({tintColor}) => <Icon name="list" size={20} color={tintColor} />,
};
