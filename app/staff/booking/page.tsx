"use client"
import Form from "@/app/components/booking/Form";
import { useState } from "react";

export default function page() {
  const [changeActiveColor, setChangeActiveColor] = useState(false)
  console.log('changeActiveColor', changeActiveColor)
  return (
    <div style={{ overflowX: 'clip' }}>
      <Form setChangeActiveColor={setChangeActiveColor} changeActiveColor={changeActiveColor} />
      {changeActiveColor &&
        <div className="m-auto">
          <svg width="100vw" height="481" viewBox="0 0 1920 481" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="959.17" cy="665" rx="1222.5" ry="665" fill="#F3F0FF" />
          </svg>
        </div>
      }
    </div>
  )
}
