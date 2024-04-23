async function fetchDefaults (setApiDefaults, setBusy) {
  const responsesJSON = await Promise.all([
    // Fetching genres
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
      }
    }),
    // Fetching languages
    fetch('https://api.themoviedb.org/3/configuration/languages', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
      }
    }),
    // Fetching regions
    fetch(
      'https://api.themoviedb.org/3/watch/providers/regions?language=en-US',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
        }
      }
    ),
    // Fetching providers
    fetch('https://api.themoviedb.org/3/watch/providers/movie?language=en-US', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
      }
    })
  ])

  const [genreData, languageData, regionData, providerData] = await Promise.all(
    responsesJSON.map(r => r.json())
  )

  setApiDefaults({
    genreList: genreData.genres,
    languageList: languageData.sort((a, b) =>
      a.english_name.localeCompare(b.english_name)
    ),
    regionList: regionData.results.sort((a, b) =>
      a.english_name.localeCompare(b.english_name)
    ),
    providerList: providerData.results.sort((a, b) =>
      a.provider_name.localeCompare(b.provider_name)
    )
  })

  setBusy(false)
}

export { fetchDefaults }
