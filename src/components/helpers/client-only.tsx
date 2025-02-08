"use client"

import React, { useEffect, useState } from "react"

export function ClientOnly({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}

export default ClientOnly
