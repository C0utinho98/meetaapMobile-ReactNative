export function subscriptionRequest(id) {
  return {
    type: '@meetup/SUBSCRIPTION_REQUEST',
    payload: {id},
  };
}

export function subscriptionSuccess(id) {
  return {
    type: '@meetup/SUBSCRIPTION_SUCCESS',
    payload: {id},
  };
}

export function subscriptionFailure() {
  return {
    type: '@meetup/SUBSCRIPTION_FAILEURE',
  };
}

export function cancelSubscriptionRequest(id) {
  return {
    type: '@meetup/CANCEL_SUBSCRIPTION_REQUEST',
    payload: {id},
  };
}

export function cancelSubscriptionSuccess(id) {
  return {
    type: '@meetup/CANCEL_SUBSCRIPTION_SUCCESS',
    payload: {id},
  };
}

export function cancelSubscriptionFailure() {
  return {
    type: '@meetup/CANCEL_SUBSCRIPTION_FAILURE',
  };
}
