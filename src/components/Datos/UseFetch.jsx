import { useEffect,useState } from 'react'

const UseFetch = (url) => {

    const [resultados, setResults]= useState({loading:true,data:null})

    useEffect(()=>{
        getData(url)
    },[url]);

    const getData = async(url) =>{
        try {
            setResults({loading:true,data:null})
            const response= await fetch(url)
            const data=  await response.json()
            setResults({loading:false,data})
        } catch (error) {
            console.log(error);
        }
    };

    return resultados
}

export default UseFetch
