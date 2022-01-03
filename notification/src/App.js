import "./App.css";

const useNotification = (title, options) => {
  if (!Notification) return;

  const fireNoti = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNoti;
};

function App() {
  const requestPermission = () => {
    if (!Notification) {
      return;
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === "denied") {
          alert("알림을 허용하지 않았습니다.");
        } else if (permission === "granted") {
          alert("알림을 허용했습니다.");
        }
      });
    }
  };

  const showNotification = () => {
    if (Notification.permission === "granted") {
      console.log("h");
      let notify = new Notification("알림이 왔습니다.", {
        body: "안녕하세요. \n알림을 성공적으로 수신했습니다.",
        icon: "https://tistory3.daumcdn.net/tistory/2979840/attach/6e5d2d16ab6a49628dfe1f4c164e38a0",
        tag: "메시지",
      });
      notify.onclick = function () {
        alert(this.tag);
      };
    } else {
      alert("알림을 허용해 주세요.");
    }
  };

  return (
    <>
      <button onClick={requestPermission}>권한요청</button>
      <button onClick={showNotification}>알림</button>
    </>
  );
}

export default App;
