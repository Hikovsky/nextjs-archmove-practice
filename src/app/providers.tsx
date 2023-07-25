"use client"

import {ThemeProvider} from "next-themes";

// @ts-ignore
const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default Providers
