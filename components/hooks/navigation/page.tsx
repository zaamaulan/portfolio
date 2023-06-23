'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function UsePathname() {
  const pathname = usePathname()
  return (
    <div>{pathname}</div>
  )
}
