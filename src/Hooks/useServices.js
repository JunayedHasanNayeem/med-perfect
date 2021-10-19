import { useEffect, useState } from "react"

const useServices = () => {

    //Load Services from database. 
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://junayedhasannayeem.github.io/fake-data/services.json')
            .then(res => res.json())
            .then(data => {
               setServices(data)
            })
    }, [])

    return services

}

export default useServices;