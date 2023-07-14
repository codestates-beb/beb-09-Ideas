function calcTime(timeData) {
  const currentTime = new Date();
  const timeDiff = currentTime - timeData;

  let timeDisplay;
  if (timeDiff < 3600000) {
    // 게시글이 생성된지 1시간 이내
    const minutesDiff = Math.floor(timeDiff / (1000 * 60));
    timeDisplay = `${minutesDiff} minutes ago`;
  } else if (timeDiff < 86400000) {
    // 게시글이 생성된지 1시간이 넘었을 경우
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    timeDisplay = `${hoursDiff} hours ago`;
  } else {
    // 게시글이 생성된지 24시간 이상
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    timeDisplay = `${daysDiff} days ago`;
  }

  return timeDisplay;
}

export default calcTime;
