import { useState, useEffect, forwardRef } from 'react'

const StatusBar = forwardRef((props, ref) => {
  const [time, setTime] = useState('9:27')
  const [batteryLevel, setBatteryLevel] = useState(0.8)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}`)
    }

    const updateBattery = () => {
      const level = Math.random() * 0.7 + 0.2 // 20% to 90%
      setBatteryLevel(level)
    }

    // Initial update
    updateTime()
    updateBattery()

    // Set intervals
    const timeInterval = setInterval(updateTime, 60000) // Every minute
    const batteryInterval = setInterval(updateBattery, 300000) // Every 5 minutes

    return () => {
      clearInterval(timeInterval)
      clearInterval(batteryInterval)
    }
  }, [])

  const getBatteryColor = () => {
    if (batteryLevel < 0.3) return '#ff4444'
    if (batteryLevel < 0.5) return '#ffaa00'
    return '#000000'
  }

  return (
    <div className="status-bar" ref={ref}>
      <div className="time">{time}</div>
      <div className="status-icons">
        {/* Cell Signal */}
        <div className="cell-signal">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
          <div className="bar bar-4"></div>
        </div>

        {/* WiFi Icon */}
        <div className="wifi-icon">
          <div className="wifi-bar wifi-1"></div>
          <div className="wifi-bar wifi-2"></div>
          <div className="wifi-bar wifi-3"></div>
        </div>

        {/* Battery */}
        <div className="battery">
          <div
            className="battery-level"
            style={{
              width: `${18 * batteryLevel}px`,
              backgroundColor: getBatteryColor()
            }}
          ></div>
          <div className="battery-cap"></div>
        </div>
      </div>
    </div>
  )
})

StatusBar.displayName = 'StatusBar'

export default StatusBar 