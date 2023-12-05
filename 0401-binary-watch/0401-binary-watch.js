/**
 * @param {number} turnedOn
 * @return {string[]}
 */
// 순서상관없음
// 조합을 만들다가 시간이 11, 분이 59초과하면 stop
// 분, 시간을 하나로 합친 뒤
// 중복
var readBinaryWatch = function (turnedOn) {
  const time = [1, 2, 4, 8, 16, 32, 1, 2, 4, 8];
  const timeArr = time.map((t, i) => ({ isMin: i < 6, time: t }));
  const answer = [];

  function bt(count, currHour, currMin, nonVisitedArr, visited) {
    if (count > turnedOn) {
      return;
    }
    if (count === turnedOn) {
      const formattedTime = `${currHour}:${currMin < 10 ? 0 : ""}${currMin}`;
      answer.push(formattedTime);
      return;
    }

    for (let i = 0; i < nonVisitedArr.length; ++i) {
      const { isMin, time } = nonVisitedArr[i];
      // 시간초과 검사
      if (isMin) {
        if (currMin + time > 59) continue;
        bt(count + 1, currHour, currMin + time, nonVisitedArr.slice(i + 1), [
          ...visited,
          time,
        ]);
      } else {
        if (currHour + time > 11) continue;
        bt(count + 1, currHour + time, currMin, nonVisitedArr.slice(i + 1), [
          ...visited,
          time,
        ]);
      }
    }
  }
  bt(0, 0, 0, timeArr, []);
  return answer;
};