
'use client'
import Snowfall from 'react-snowfall';

export default function CustomSnowfall() {
    return <div className="pointer-events-none fixed inset-0 z-50">
        <Snowfall snowflakeCount={50} />
    </div>


}