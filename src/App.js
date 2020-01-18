import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './CSS/App.css'
import Home from './Components/Work'
import Videos from './Components/Work/Videos'
import Contact from './Components/Work/Contact'
import Stills from "./Components/Stills"
import LandingPage from './Components/LandingPage'
import LoadingVideos from "./Components/Work/LoadingVideos"
import LoadingImages from './Components/Stills/LoadingImages'

let Cosmic = require('cosmicjs')()

const App = () => {
  const [videos, setVideos] = useState(null)
  const [images, setImages] = useState(null)

  const filterMedia = (values, type) =>
    values.filter(({ type_slug }) => type_slug === type)

  const sortMedia = (values, type) => {
    const media = values.slice(0)
    media.sort(function(a, b) {
      return a.order - b.order
    })

    type === 'videos' ? setVideos(media) : setImages(media)
  }

  useEffect(() => {
    Cosmic.authenticate({
      email: process.env.REACT_APP_EMAIL,
      password: process.env.REACT_APP_PASSWORD,
    })
      .then(data => {
        Cosmic = require('cosmicjs')({
          token: data.token,
        })

        Cosmic.getBuckets().then(data =>
          data.buckets.forEach(item => {
            if (item.title === 'joelhordegard') {
              const bucket = Cosmic.bucket({
                slug: item.title,
                read_key: item.api_access.read_key,
                write_key: '',
              })

              bucket.getBucket().then(({ bucket: { objects } }) => {
                const videos = filterMedia(objects, 'videos')
                const images = filterMedia(objects, 'images')

                sortMedia(videos, 'videos')
                sortMedia(images)
              })
            }
          }),
        )
      })
      .catch(err => {
        throw new Error('Not authorized')
      })
  }, [])



  return (
    <Router>
      <Switch>
        <Route path="/:work">
          <Home>
            {!videos && <LoadingVideos/>}
            {videos && videos.length > 0 && <Videos videos={videos} />}
            
          </Home>
        </Route>

        <Route path="/:stills">
          <Home>
          {!images && <LoadingImages/>}

            <Stills images={images}/>
          </Home>
        </Route>
        <Route path="/:contact">
          <Home>
            <Contact />
          </Home>
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
