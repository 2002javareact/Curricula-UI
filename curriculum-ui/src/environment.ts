const devEnvironment = {
  curriculaBaseUrl:'http://localhost:8080'
}

const prodEnvironment = {
  curriculaBaseUrl:''
}

export let environment = devEnvironment

if(process.env.REACT_APP_ENV === 'production'){
  environment = devEnvironment
}
