import { createContext, useState } from "react";
import { alphaAsc, alphaDes, pubAsc, pubDes } from "../src/components/Header"

const SortContext = createContext();

export function SortProvider({children}){

    const [sortValue, setSortValue] = useState(pubAsc);

    function ChooseSort(value){
        setSortValue(value);
    };

    // Sorts the results either Alphabetically or by published date
    function SortResults(data, setState){

        if(sortValue === alphaAsc){
            console.log('Alphabet');
               const sortedAlphabeticallyAscending = data.articles.sort(function(a, b) {
                    return (a.title.toUpperCase() < b.title.toUpperCase()) ? -1 : (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : 0;
                });

                setState(sortedAlphabeticallyAscending);
                console.log(sortedAlphabeticallyAscending)
            }
            else if(sortValue === alphaDes){
                console.log("Alpha Descending")
                const sortedAlphabeticallyDesc = data.articles.sort(function(a, b){
                    return (a.title.toUpperCase() > b.title.toUpperCase()) ? -1 : (a.title.toUpperCase() < b.title.toUpperCase()) ? 1 : 0;
                });

                setState(sortedAlphabeticallyDesc);
            }

            else if(sortValue === pubAsc){
                console.log("Published Ascending");

                const sortedPublishedAsc = data.articles.sort(function(a, b){
                    return (a.publishedAt.toString() > b.publishedAt.toString()) ? -1 : (a.publishedAt.toString() < b.title.toUpperCase()) ? 1 : 0;
                });

                setState(sortedPublishedAsc);
            }
            else if(sortValue === pubDes){
                console.log("Published Descending")

                const sortedPublishedDes = data.articles.sort(function(a, b){
                    return (a.publishedAt.toString() < b.publishedAt.toString()) ? -1 : (a.publishedAt.toString() > b.title.toUpperCase()) ? 1 : 0;
                });

                setState(sortedPublishedDes);
            }
    }
    
    return(
        <SortContext.Provider value={{sortValue, ChooseSort, SortResults}}>
            {children}
        </SortContext.Provider>
    )
}

export default SortContext;