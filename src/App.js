import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './CSS/App.css'
import Home from './Components/Work'
import Videos from './Components/Work/Videos'
import Contact from './Components/Work/Contact'
import Stills from './Components/Stills'
import LandingPage from './Components/LandingPage'
import LoadingVideos from './Components/Work/LoadingVideos'
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
    const bucket = Cosmic.bucket({
      slug: process.env.REACT_APP_BUCKET,
      read_key: process.env.REACT_APP_APIKEY,
    })
    bucket.getObjects().then(({objects})=> {





      console.log("objects: ", objects)
      const videos = filterMedia(objects, 'videos')
      const images = filterMedia(objects, 'images')

      console.log("videoS here: ", videos)
      sortMedia(videos, 'videos')
      sortMedia(images)
    }).catch((err)=> {throw new Error('Not authorized')})
  }, [])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/work`}>
          <Home>
            {!videos && <LoadingVideos />}
            {videos && videos.length > 0 && <Videos videos={videos} />}
          </Home>
        </Route>

        <Route path="/stills">
          <Home>
            {!images && <LoadingImages />}

            <Stills images={images} />
          </Home>
        </Route>
        <Route path="/contact">
          <Home>
            <Contact />
          </Home>
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="*" component={() => <h2>WALLA HABIBI</h2>} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
