const devEnvironment = {
    curriculaBaseUrl:'http://localhost:8080'
}

const prodEnvironment = {
    curriculaBaseUrl:'http://localhost:8080'
}


export let environment = devEnvironment

if(process.env.REACT_APP_ENV === 'production'){
<<<<<<< HEAD
    environment = devEnvironment
=======
  environment = devEnvironment
>>>>>>> dev
}

