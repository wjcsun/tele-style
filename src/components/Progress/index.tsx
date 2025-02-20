import { Progress as TgProgress, ProgressProps, CircularProgress, CircularProgressProps } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";
import React from "react";
export interface ProgressTgProps extends ProgressProps, Omit<CircularProgressProps, keyof ProgressProps> {
  duration?: number;
  defaultType?: boolean;
}

export default function Progress({ value = 100, duration = 0, defaultType = true, ...rest }: ProgressTgProps) {
  const [progressVal, setProgressVal] = useState(0)

  useEffect(() => {
    if (value <= 0 || duration <= 0) {
      setProgressVal(value)
      return
    }

    const intervalTime = 100
    const totalSteps = (duration * 1000) / intervalTime
    const stepSize = value / totalSteps

    setProgressVal(0)
    const timer = setInterval(() => {
      setProgressVal((prev) => {
        const nextProgress = prev + stepSize
        if (nextProgress >= value) {
          clearInterval(timer)
          return value
        }
        return nextProgress
      })
    }, intervalTime)

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div>
      {defaultType ? (
        <TgProgress value={progressVal} {...rest} />
      ) : (
        <CircularProgress progress={progressVal} {...rest} />
      )}
    </div>
  );
}
