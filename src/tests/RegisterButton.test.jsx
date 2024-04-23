import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent } from '@testing-library/react'
import customRender from './utils/customRender'
import { vi } from 'vitest'
import RegisterButton from '../components/RegisterButton'

const mockContextValue = {
  api: [[], vi.fn()], // Mock apiDefaults and its setter function
  LoggedIn: [false, vi.fn()], // Mock isLoggedIn and its setter function
  loggedUser: ['mockUser', vi.fn()], // Mock user and its setter function
  movieList: [[], vi.fn()] // Mock movies and its setter function
}

//UNIT TEST
describe('RegisterButton component unit tests', () => {
  test('RegisterButton shows a description', () => {
    customRender(<RegisterButton />, mockContextValue)

    expect(screen.getByText).toBeDefined()
    expect(
      screen.getByText(
        "Want faster searches? Don't want to input your streaming platform availability everytime? Than register for an account to get default settings applied straight away!"
      )
    ).toBeDefined()
  })
})

//INTEGRATION TEST
describe('RegisterButton component integration test', () => {
  test('Clicking on RegisterButton redirects to register page', async () => {
    customRender(<RegisterButton />, mockContextValue)

    const registerButton = screen.getByRole('button', { name: /Register/i })
    await fireEvent.click(registerButton)
    expect(screen.getByText('Register')).toBeInTheDocument()
  })
})
