import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/performance";

import firebaseCore from "firebase/app";

export const firebaseConfig = {};

if (!firebaseCore.apps.length) {
  firebaseCore.initializeApp(firebaseConfig);
}

export const firebase = firebaseCore;
export const auth = firebaseCore.auth();
export const analytics = firebaseCore.analytics();
export const performance = firebaseCore.performance();
export const firestore = firebaseCore.firestore();
