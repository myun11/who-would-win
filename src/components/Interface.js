import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Interface = () => {
    const [imageData, setImageData] = useState([])

    const [leftScreen, setLeftScreen] = useState([])
    const [rightScreen, setRightScreen] = useState([])

    const categories = [
        "waifu",
        "neko",
        "shinobu",
        "megumin",
        "bully",
        "cuddle",
        "cry",
        "hug",
        "awoo",
        "kiss",
        "lick",
        "pat",
        "smug",
        "bonk",
        "yeet",
        "blush",
        "smile",
        "wave",
        "highfive",
        "handhold",
        "nom",
        "bite",
        "glomp",
        "slap",
        "kill",
        "kick",
        "happy",
        "wink",
        "poke",
        "dance",
        "cringe"]
    const [category, setCategory] = useState("waifu")
    //initialize and call API upon page load
    useEffect(() => {
        // axios.get('https://api.waifu.pics/sfw/waifu')
        axios.get('https://api.nekosapi.com/v2/characters')
        .then((res) => setImageData(res))
        
    }, [])
    return (
        <div>
            Category:
            <select onChange = {(e) => setCategory(e.target.value)}>
                {categories.map(tag => {
                    return <option value = {tag}>{tag}</option>
                })}
            </select>
            

            <div>
                <button onClick = {() => console.log(imageData)}>debug</button>

            </div>
        </div>
    )
}

export default Interface