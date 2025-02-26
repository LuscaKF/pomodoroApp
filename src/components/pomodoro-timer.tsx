import React, { useEffect, useState, useCallback } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';
import { secondsTotime } from '../utils/second-to-time';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const clockAlarm = require('../sounds/clock-alarm-8761.mp3')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const beepWarning = require('../sounds/beep-warning-6387.mp3')

const audioStartWorking = new Audio(beepWarning);
const audioStopWorking = new Audio(clockAlarm);

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(new Array(props.cycles - 1).fill(true));

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null,
    );

    const configureWork = useCallback(() => {
      setTimeCounting(true);
      setWorking(true);
      setResting(false);
      setMainTime(props.pomodoroTime);
      audioStartWorking.play()
    }, [
      setTimeCounting,
      setWorking,
      setResting,
      setMainTime,
      props.pomodoroTime
    ]);

    const configureRest = useCallback((Long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);

      if (Long) {
        setMainTime(props.longRestTime);
      } else {
        setMainTime(props.shortRestTime);
      }

      audioStopWorking.play()
    }, [
      setTimeCounting,
      setWorking,
      setResting,
      setMainTime,
      props.longRestTime,
      props.shortRestTime
    ]);

    useEffect(() => {
      if (working) document.body.classList.add('working');
      if (resting) document.body.classList.remove('working');

      if (mainTime > 0) return;

      if (working && cyclesQtdManager.length > 0) {
        configureRest(false);
        cyclesQtdManager.pop();
      } else if (working && cyclesQtdManager.length <= 0) {
        configureRest(true);
        setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
        setCompletedCycles(completedCycles + 1);
      }

      if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
      if (resting) configureWork();
    }, [
      working,
      resting,
      mainTime,
      configureRest,
      cyclesQtdManager,
      setCompletedCycles,
      configureWork,
      numberOfPomodoros,
      props.cycles,
      completedCycles
    ]);

  return (
    <div className='pomodoro'>
      <h2>You are: {working ? 'Working!' : 'Resting!'}</h2>

      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="Work" onClick={() => configureWork()}></Button>
        <Button text="Rest" onClick={() => configureRest(false)}></Button>
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
      </div>

      <div className="details">
        <p>Completed cycles: {completedCycles}</p>
        <p>Worked hours: {secondsTotime(fullWorkingTime)}</p>
        <p>Number of pomodoros: {numberOfPomodoros}</p>
      </div>
    </div>
  );
}
