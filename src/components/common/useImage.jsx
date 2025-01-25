import { useEffect, useState } from 'react'

const useImage = (fileName, folderName) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);
    const generalFolders = ["photoes", "dash", "genesis", "management", "ssc","staff", "testimonials", "uniform"];
    const culturalFolders = ["MoruloDance", "Patriotic singing group", "Taluka level Sane Guruji Story Telling Competition"];
    const achFolders = ["sports", "Cultural"];
    const lifeFolders = ["Lessons on Interective Smart Board", "Morning assembly", "Our school", "Special Program"];
    const eventFolder = ["Annual Gathering", "Annual Sports","Annual Sports meet", "Chaturthi Celebration", "Clenliness drive", "Demonstration of decorative items from leaves on world environment day",
     "Expert Talk", "field trip", "Fire Mock Drill", "Health checkup", "Hemoglobin Checkup", "Hike", "Makar Sakrant", "Picnic", "Rally", "Ram Janmastami", "Rang Panchami (Shishuvatika)",
      "Residencial camp", "Sharadotsav", "Subject Activity", "Summer Camp", "Surya namaskar", "Tilak Punyatithi", "Yog day", "Yuvak Din"];
    const specialProgramFolder = ["Aaji Ajoba Diwas", "Art & Muisc class", "Van Bhojan", "Swadesh Saptah", "Shramadaan", "Samarpan", "Matru Pujan", "Heros Celebration", "GuruPoornima","Gokul Ashtami", "Doordarshan", "Dev Darshan", "Balika Shikshan"];
    //console.log(fileName);
    //console.log(folderName);
    //console.log(`../../assets/images/${folderName}/${fileName}`+`.jpg`);
    useEffect(() => {
        const fetchImage = async () => {
            try {
                if(generalFolders.includes(folderName)) {
                    console.log("includes");
                    const response = await import(`../../assets/images/${folderName}/${fileName}`+`.jpg`)
                    setImage(response.default)
                } else {
                    if(culturalFolders.includes(folderName)) {
                        const response = await import(`../../assets/images/life_at_sgvm/achievments/Cultural/${folderName}/${fileName}`+`.jpg`)
                        setImage(response.default)
                    } else if(achFolders.includes(folderName)) {
                        const response = await import(`../../assets/images/life_at_sgvm/achievments/${folderName}/${fileName}`+`.jpg`)
                        setImage(response.default)
                    } else if(lifeFolders.includes(folderName)) {
                        const response = await import(`../../assets/images/life_at_sgvm/${folderName}/${fileName}`+`.jpg`)
                        setImage(response.default)
                    } else if(eventFolder.includes(folderName)) {
                        const response = await import(`../../assets/images/life_at_sgvm/Event & Activites/${folderName}/${fileName}`+`.jpg`)
                        setImage(response.default)
                    } else if(specialProgramFolder.includes(folderName)) {
                        const response = await import(`../../assets/images/life_at_sgvm/Special Program/${folderName}/${fileName}`+`.jpg`)
                        setImage(response.default)
                    }
                }
                //const response = await import(`../../assets/images/${folderName}/${fileName}`+`.jpg`) // change relative path to suit your needs
                
                //console.log(response);
                
            } catch (err) {
                console.log(err);
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [fileName])

    return {
        loading,
        error,
        image,
    }
}

export default useImage;