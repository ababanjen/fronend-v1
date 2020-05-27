import React from 'react'
import { LoremIpsum } from "lorem-ipsum";
import { v4 as uuidv4 } from 'uuid';
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  const host = 'http://localhost:3000/'
  const wwdIcons = [
    {
        title:'Graphic Design',
        icon:`${host}img/graphic.png`},
    {
        title:'Web Development',
        icon:`${host}img/web.png`},
    {
        title:'Marketing',
        icon:`${host}img/marketing.png`},
  ]
  const generateRandomData = () => {
    let data = []
    for(let n=0; n <= 2; n++) {
      data.push({
        id:`wwd-id-${uuidv4()}`,
        title:wwdIcons[n].title,
        content:lorem.generateSentences(2),
        icon:wwdIcons[n].icon
      })
    }
    return data
  }

  const experties = [
      {
          title:'Brandding',
          percentage:90
      },
      {
        title:'Design',
        percentage:80
    },
    {
      title:'Development',
      percentage:85
    }
  ]
  const generateExperties = () => {
    let data = []
    for(let n=0; n <= 2; n++) {
      data.push({
        id:`e-id-${uuidv4()}`,
        title:experties[n].title,
        percentage:experties[n].percentage,
      })
    }
    return data
  }

  const sites = [
    {
        title:'Facebook'
    },
    {
      title:'Twitter'
  },
  {
    title:'Google+'
  },
  {
    title:'Behance'
  },
  {
    title:'Dribble'
  },
  {
    title:'Instagram'
  }
]
const generateSites = () => {
  let data = []
  for(let n=0; n < sites.length; n++) {
    data.push({
      id:`e-id-${uuidv4()}`,
      title:sites[n].title,
    })
  }
  return data
}  
  
const whatWeDoList = generateRandomData()
const expertiesList = {list:generateExperties(), detail:lorem.generateSentences(6)}
const socialSites = generateSites()
const detail = {
    img:`${host}img/plan.jpg`,
    content: lorem.generateSentences(6)
}
export {
    whatWeDoList,
    expertiesList,
    detail,
    socialSites
  }