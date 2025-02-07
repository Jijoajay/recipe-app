import React from 'react'
import { useLocation } from 'react-router'

export const useCommon = () => {
    const location = useLocation()
    const path = location.pathname

  return {
    path
  }
}
