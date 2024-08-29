import { StyleSheet, View, Text} from 'react-native'
import React, {useState} from 'react'

// Import Component
import SearchBar from '../components/SearchBar'
import ResultList from '../components/ResultList'


// Import Hooks
import useResults from '../hooks/useResults'





export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults()
  const [term, setTerm] = useState('')

  const filterResultsByPrice = (price) => {

    return results.filter((result) => {
        return result.price === price
    })

  }
  return (
    <View>
      <SearchBar term={term}
                 onTermChange={setTerm}
                 onTermSubmit={() => searchApi(term)}/>
      {
        errorMessage ? <Text>{errorMessage}</Text> : 
        <>
          {
            results.length == 0 ? (<></>) : 
            (<>
                  <ResultList title ="Ucuz Restorantlar" 
                      results={filterResultsByPrice('₺')}/>
                  <ResultList title ="Uygun Restorantlar" 
                              results={filterResultsByPrice('₺₺')}/>
                  <ResultList title ="Pahalı Restorantlar" 
                              results={filterResultsByPrice('₺₺₺')}/>
            </>)
          }        
        </>
      }

    </View>
  )
}

const styles = StyleSheet.create({})