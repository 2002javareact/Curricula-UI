const devEnvironment = {
    project3BaseUrl:'http://localhost:8080'
}

const prodEnvironment = {
    project3BaseUrl:''
}

export let environment = devEnvironment

if(process.env.REACT_APP_ENV === 'production'){
    environment = prodEnvironment
}

