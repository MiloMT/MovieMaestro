import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, mount } from 'vitest'
import Footer from '../components/Footer'
import userEvent from "@testing-library/user-event";

// UNIT TESTS FOR FOOTER

describe('Footer Component Unit Tests', () => {
    test('renders TMDB logo in the footer', () => {
        const { getByAltText } = render(<Footer />)
        const tmdbLogo = getByAltText('TMDB Logo')
        expect(tmdbLogo).toBeInTheDocument()
    })

    test('renders footer with attribution text', () => {
        const  { getByText } = render(<Footer />)
        const attributionText = getByText(/This product uses the TMDB API but is not endorsed or certified by TMDB./i)
        expect(attributionText).toBeInTheDocument()
    })
    test('renders footer with the creators names', () => {
        const { getByText } = render(<Footer />)
        const creatorNames = getByText(/Created by: Myles, Yoshi, Mitch/i)
        expect(creatorNames).toBeInTheDocument()
    })
})

// INTEGRATION TESTS FOR FOOTER
// Footer does not specifically have the use for integration tests.



