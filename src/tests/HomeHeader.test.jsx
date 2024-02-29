import '@testing-library/jest-dom/vitest'
import { React } from 'react'
import { screen } from '@testing-library/react'
import { describe, test, expect } from "vitest"
import  Header  from '../components/HomeHeader'
import customRender from './utils/customRender'

const mockContextValue = {
    api: [[], vi.fn()], // Mock apiDefaults and its setter function
    LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
    loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
    movieList: [[], vi.fn()], // Mock movies and its setter function
    };

//UNIT TESTS FOR HOME HEADER
describe('Home Header component', () => {
    test('renders the header component', () => {
        customRender(<Header />, mockContextValue)
        
        const HeaderText1 = screen.getByText('Stuck Doom Scrolling?')
        expect(HeaderText1).toBeInTheDocument()
        const HeaderText2 = screen.getByText('Let us choose for you!')
        expect(HeaderText2).toBeInTheDocument()
    })
})
