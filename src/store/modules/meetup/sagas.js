import {takeLatest, put, call, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '../../../services/api';
import {
  subscriptionSuccess,
  subscriptionFailure,
  cancelSubscriptionFailure,
  cancelSubscriptionSuccess,
} from './actions';

export function* subsMeetup({payload}) {
  try {
    const {id} = payload;
    const response = yield call(api.post, `meetup/${id}/subscriptions`);

    Alert.alert('Sucesso!', 'Inscrição realizada com sucesso!');

    yield put(subscriptionSuccess(response.data));
  } catch (erro) {
    const message =
      erro && erro.response && erro.response.data && erro.response.data.error;

    Alert.alert('Falha!', message);
    put(subscriptionFailure);
  }
}

export function* cancelSubsMeetup({payload}) {
  try {
    const {id} = payload;

    const response = yield call(api.delete, `meetup/${id}/subscriptions`);

    Alert.alert('Cancelado!', 'Inscrição cancelada!');
    put(cancelSubscriptionSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro ao cancelar!', 'Erro ao cancelar inscrição!');
    put(cancelSubscriptionFailure());
  }
}

export default all([
  takeLatest('@meetup/SUBSCRIPTION_REQUEST', subsMeetup),
  takeLatest('@meetup/CANCEL_SUBSCRIPTION_REQUEST', cancelSubsMeetup),
]);
