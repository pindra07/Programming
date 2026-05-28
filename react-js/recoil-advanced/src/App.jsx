import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { networkAtom, totalNotificationSelector, jobsAtom, notificationAtom, messageAtom } from "./atom";
import ToDo from "./Todo";

// useRecoilValue
// useSetRecoilState
// selectors
// asynchronous data query

//. getting todos frm api
// store in a state i.e array of object
// render it using map in a component

function App() {


  return (
    <>
      <RecoilRoot>
        <Header />
        <br />
        <hr />
        <ToDo id={1} />
        <ToDo id={2} />
      </RecoilRoot>
    </>
  );
}

export default App;


// Header Component
function Header() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const finalValue =
    networkNotificationCount >= 100 ? "99+" : networkNotificationCount;
  
    const setNotificaionRecoilState = useSetRecoilState(networkAtom)

    function increaseNotificaion() {
      setNotificaionRecoilState(c => c+1)
    }

    function decreaseNotification() {
      setNotificaionRecoilState(c => c-1)
    }

  return (
    <>
      <button>Home ({useRecoilValue(networkAtom)})</button>
      <button>Jobs ({useRecoilValue(jobsAtom)})</button>
      <button>Notification ({finalValue})</button>
      <button>Messaging ({useRecoilValue(messageAtom)})</button>
      <br />
      <hr />
      <button onClick={increaseNotificaion}>Notification Increaser</button>
      <button onClick={decreaseNotification}>Notification Decrease</button>
      <ChildComponent />
    </>
  );
}

// child component to header component
function ChildComponent() {
  const notificationNumber = useRecoilValue(totalNotificationSelector)
  return <>
    <p>Notificaion count {notificationNumber}</p>
  </>
}



