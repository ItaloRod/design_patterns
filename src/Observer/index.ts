import Jornal from "./_Jornal";
import SubscriberA from "./_SubscriberA";
import SubscriberB from "./_SubscriberB";

const jornal = new Jornal();

const subscriberA = new SubscriberA()
jornal.attach(subscriberA)
const subscriberB = new SubscriberB()
jornal.attach(subscriberB)

jornal.someBusinessLogic()
jornal.someBusinessLogic()

jornal.detach(subscriberB)
jornal.someBusinessLogic()
