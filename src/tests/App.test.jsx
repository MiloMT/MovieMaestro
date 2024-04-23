import React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import customRender from './utils/customRender'
import { App } from '../components/App'

describe('App unit Tests', () => {
  test('renders loading message initially', () => {
    customRender(<App />)

    const loadingMessage = screen.getByText('Loading...')
    expect(loadingMessage).toBeDefined()
  })
})

// without mocking defaults this test successfully checked that App is rendering successfully
