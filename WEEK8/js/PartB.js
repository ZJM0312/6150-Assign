let timerId = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

// 初始化日期选择器
const datePicker = document.getElementById("datePicker");
const today = new Date().toISOString().split("T")[0];
datePicker.value = today;

// 更新时间标签的函数
const updateTimeLabel = () => {
  const timeLabel = document.getElementById("timeLabel");
  timeLabel.textContent = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

// 开始计时器的函数
//async/await
const startTimer = async () => {
  if (timerId !== null) return; // 计时器已经在运行

  const tick = () => {
    //Promise
    return new Promise((resolve) => {
      //setInterval
      timerId = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
        updateTimeLabel();
        resolve();
      }, 1000);
    });
  };

  //async/await
  await tick();
};

// 停止计时器的函数
//clearInterval;
const stopTimer = () => {
  clearInterval(timerId);
  timerId = null;
};

// 重置计时器的函数
const resetTimer = () => {
  stopTimer();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTimeLabel();
};
